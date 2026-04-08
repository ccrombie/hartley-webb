import { Hono } from 'hono'
import type { Bindings } from '../index'

export const ordersRouter = new Hono<{ Bindings: Bindings }>()

// GET /api/orders?customerId=...
ordersRouter.get('/', async (c) => {
  const customerId = c.req.query('customerId')

  if (!customerId) {
    return c.json({ error: 'customerId query parameter required' }, 400)
  }

  const orders = await c.env.DB.prepare(
    'SELECT * FROM orders WHERE customer_id = ? ORDER BY created_at DESC'
  ).bind(customerId).all()

  return c.json({ orders: orders.results, count: orders.results.length })
})

// GET /api/orders/:id
ordersRouter.get('/:id', async (c) => {
  const id = c.req.param('id').toUpperCase()

  const order = await c.env.DB.prepare(
    'SELECT * FROM orders WHERE id = ?'
  ).bind(id).first()

  if (!order) {
    return c.json({ error: 'Order not found' }, 404)
  }

  const items = await c.env.DB.prepare(
    'SELECT * FROM order_items WHERE order_id = ?'
  ).bind(id).all()

  return c.json({
    order: {
      ...order,
      items: items.results
    }
  })
})
