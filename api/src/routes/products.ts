import { Hono } from 'hono'
import type { Bindings } from '../index'

export const productsRouter = new Hono<{ Bindings: Bindings }>()

// GET /api/products?search=...&department=...&limit=20
productsRouter.get('/', async (c) => {
  const { search, department, limit = '20' } = c.req.query()

  let query = `
    SELECT p.*, d.name as department_name
    FROM products p
    LEFT JOIN departments d ON p.department_id = d.id
    WHERE 1=1
  `
  const params: (string | number)[] = []

  if (search) {
    query += ` AND (p.name LIKE ? OR p.description LIKE ? OR p.brand LIKE ?)`
    params.push(`%${search}%`, `%${search}%`, `%${search}%`)
  }

  if (department) {
    query += ` AND d.slug = ?`
    params.push(department.toLowerCase())
  }

  query += ` ORDER BY p.name LIMIT ?`
  params.push(Math.min(parseInt(limit), 100))

  const results = await c.env.DB.prepare(query).bind(...params).all()

  return c.json({ products: results.results, count: results.results.length })
})

// GET /api/products/:id
productsRouter.get('/:id', async (c) => {
  const id = c.req.param('id').toUpperCase()

  const product = await c.env.DB.prepare(`
    SELECT p.*, d.name as department_name
    FROM products p
    LEFT JOIN departments d ON p.department_id = d.id
    WHERE p.id = ?
  `).bind(id).first()

  if (!product) {
    return c.json({ error: 'Product not found' }, 404)
  }

  return c.json({ product })
})
