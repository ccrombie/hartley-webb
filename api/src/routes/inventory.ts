import { Hono } from 'hono'
import type { Bindings } from '../index'

export const inventoryRouter = new Hono<{ Bindings: Bindings }>()

// GET /api/inventory/:productId
inventoryRouter.get('/:productId', async (c) => {
  const productId = c.req.param('productId').toUpperCase()

  const row = await c.env.DB.prepare(`
    SELECT i.*, p.name as product_name, p.price
    FROM inventory i
    JOIN products p ON i.product_id = p.id
    WHERE i.product_id = ?
  `).bind(productId).first() as Record<string, unknown> | null

  if (!row) {
    return c.json({ error: 'Product not found' }, 404)
  }

  const stock = row.stock_level as number
  const status = stock === 0 ? 'out_of_stock' : stock < 5 ? 'low_stock' : 'in_stock'

  return c.json({
    inventory: {
      ...row,
      in_stock: stock > 0,
      status,
      status_label: stock === 0 ? 'Out of Stock' : stock < 5 ? `Only ${stock} left` : 'In Stock'
    }
  })
})
