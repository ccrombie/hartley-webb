import { Hono } from 'hono'
import type { Bindings } from '../index'

export const customersRouter = new Hono<{ Bindings: Bindings }>()

// Normalise phone for comparison — strips spaces, dashes, brackets, handles +44
function normalisePhone(phone: string): string {
  let p = phone.replace(/[\s\-\(\)\.]/g, '')
  if (p.startsWith('+44')) p = '0' + p.slice(3)
  if (p.startsWith('44') && p.length === 12) p = '0' + p.slice(2)
  return p
}

// GET /api/customers?phone=... | ?email=... | ?account=...
customersRouter.get('/', async (c) => {
  const { phone, email, account } = c.req.query()

  if (!phone && !email && !account) {
    return c.json({ error: 'Provide at least one of: phone, email, account' }, 400)
  }

  let customer: Record<string, unknown> | null = null

  if (phone) {
    const normalised = normalisePhone(phone)
    // Fetch all and filter — SQLite lacks regex, this handles format variations
    const all = await c.env.DB.prepare('SELECT * FROM customers').all()
    customer = (all.results as Record<string, unknown>[]).find(r =>
      normalisePhone(String(r.phone ?? '')) === normalised
    ) ?? null
  } else if (email) {
    customer = await c.env.DB.prepare(
      'SELECT * FROM customers WHERE LOWER(email) = LOWER(?)'
    ).bind(email.trim()).first()
  } else if (account) {
    customer = await c.env.DB.prepare(
      'SELECT * FROM customers WHERE account_number = ?'
    ).bind(account.trim().toUpperCase()).first()
  }

  if (!customer) {
    return c.json({ found: false, customer: null }, 404)
  }

  return c.json({ found: true, customer })
})

// GET /api/customers/:id
customersRouter.get('/:id', async (c) => {
  const id = c.req.param('id')
  const customer = await c.env.DB.prepare(
    'SELECT * FROM customers WHERE id = ?'
  ).bind(id).first()

  if (!customer) {
    return c.json({ error: 'Customer not found' }, 404)
  }

  return c.json({ customer })
})

// GET /api/customers/:id/orders
customersRouter.get('/:id/orders', async (c) => {
  const id = c.req.param('id')

  const customer = await c.env.DB.prepare(
    'SELECT id, first_name, last_name, account_number FROM customers WHERE id = ?'
  ).bind(id).first()

  if (!customer) {
    return c.json({ error: 'Customer not found' }, 404)
  }

  const orders = await c.env.DB.prepare(
    'SELECT * FROM orders WHERE customer_id = ? ORDER BY created_at DESC'
  ).bind(id).all()

  return c.json({
    customer,
    orders: orders.results,
    total_orders: orders.results.length
  })
})
