import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { customersRouter } from './routes/customers'
import { ordersRouter } from './routes/orders'
import { productsRouter } from './routes/products'
import { inventoryRouter } from './routes/inventory'

export type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('*', cors())

app.get('/', (c) => c.json({
  name: 'Hartley & Webb API',
  version: '1.0.0',
  description: 'Demo retail API for Hartley & Webb department store',
  endpoints: {
    customers: '/api/customers?phone=|email=|account=',
    orders: '/api/orders/:id  or  /api/orders?customerId=',
    products: '/api/products?search=|department=',
    inventory: '/api/inventory/:productId',
    departments: '/api/departments'
  }
}))

app.route('/api/customers', customersRouter)
app.route('/api/orders', ordersRouter)
app.route('/api/products', productsRouter)
app.route('/api/inventory', inventoryRouter)

app.get('/api/departments', async (c) => {
  const results = await c.env.DB.prepare('SELECT * FROM departments ORDER BY name').all()
  return c.json({ departments: results.results })
})

app.notFound((c) => c.json({ error: 'Not found' }, 404))

app.onError((err, c) => {
  console.error(err)
  return c.json({ error: 'Internal server error' }, 500)
})

export default app
