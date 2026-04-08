const BASE = 'https://hartley-webb-api.crombiec1.workers.dev'

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(`API error ${res.status}`)
  return res.json()
}

export const api = {
  getProducts: (params: Record<string, string> = {}) => {
    const qs = new URLSearchParams(params).toString()
    return get<{ products: Product[]; count: number }>(`/api/products${qs ? '?' + qs : ''}`)
  },
  getProduct: (id: string) =>
    get<{ product: Product }>(`/api/products/${id}`),

  getDepartments: () =>
    get<{ departments: Department[] }>(`/api/departments`),

  lookupCustomer: (params: { phone?: string; email?: string; account?: string }) => {
    const qs = new URLSearchParams(params as Record<string, string>).toString()
    return get<{ found: boolean; customer: Customer | null }>(`/api/customers?${qs}`)
  },
  getCustomerOrders: (id: string) =>
    get<{ customer: Customer; orders: Order[]; total_orders: number }>(`/api/customers/${id}/orders`),

  getOrder: (id: string) =>
    get<{ order: Order & { items: OrderItem[] } }>(`/api/orders/${id}`),

  getInventory: (productId: string) =>
    get<{ inventory: Inventory }>(`/api/inventory/${productId}`),
}

export interface Product {
  id: string
  sku: string
  name: string
  description: string
  department_id: number
  department_name: string
  brand: string
  price: number
}

export interface Department {
  id: number
  name: string
  slug: string
}

export interface Customer {
  id: string
  account_number: string
  first_name: string
  last_name: string
  email: string
  phone: string
  address_line1: string
  city: string
  postcode: string
  loyalty_points: number
  tier: 'standard' | 'silver' | 'gold'
  member_since: string
}

export interface Order {
  id: string
  customer_id: string
  status: 'pending' | 'processing' | 'dispatched' | 'delivered' | 'returned' | 'cancelled'
  total_amount: number
  delivery_address: string
  delivery_method: string
  tracking_number: string | null
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: number
  order_id: string
  product_id: string
  product_name: string
  quantity: number
  unit_price: number
}

export interface Inventory {
  product_id: string
  product_name: string
  stock_level: number
  in_stock: boolean
  status: 'in_stock' | 'low_stock' | 'out_of_stock'
  status_label: string
  price: number
}
