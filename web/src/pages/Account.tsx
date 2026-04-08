import { useState } from 'react'
import { api } from '../lib/api'
import type { Customer, Order } from '../lib/api'
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const STATUS_STYLES: Record<Order['status'], string> = {
  pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  processing: 'bg-blue-50 text-blue-700 border-blue-200',
  dispatched: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  delivered: 'bg-green-50 text-green-700 border-green-200',
  returned: 'bg-gray-50 text-gray-600 border-gray-200',
  cancelled: 'bg-red-50 text-red-600 border-red-200',
}

const TIER_STYLES: Record<Customer['tier'], string> = {
  standard: 'bg-gray-100 text-gray-700',
  silver: 'bg-gray-200 text-gray-800',
  gold: 'bg-amber-100 text-amber-800',
}

export default function Account() {
  const [query, setQuery] = useState('')
  const [queryType, setQueryType] = useState<'phone' | 'email' | 'account'>('phone')
  const [customer, setCustomer] = useState<Customer | null>(null)
  const [orders, setOrders] = useState<Order[]>([])
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const lookup = async () => {
    if (!query.trim()) return
    setLoading(true)
    setNotFound(false)
    setError('')
    setCustomer(null)
    setOrders([])

    try {
      const params = { [queryType]: query.trim() }
      const result = await api.lookupCustomer(params)
      if (!result.found || !result.customer) {
        setNotFound(true)
        return
      }
      const c = result.customer
      setCustomer(c)
      const orderResult = await api.getCustomerOrders(c.id)
      setOrders(orderResult.orders)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setQuery('')
    setCustomer(null)
    setOrders([])
    setNotFound(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">My Account</h1>
      <p className="text-gray-500 mb-8 text-sm">Look up your orders and account details.</p>

      {!customer ? (
        <div className="bg-white border border-gray-200 p-8 max-w-lg">
          <h2 className="font-semibold text-gray-900 mb-5">Find your account</h2>

          <div className="flex gap-2 mb-4">
            {(['phone', 'email', 'account'] as const).map(t => (
              <button
                key={t}
                onClick={() => setQueryType(t)}
                className={`text-xs px-3 py-1.5 border transition-colors font-medium uppercase tracking-wide
                  ${queryType === t ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 text-gray-600 hover:border-gray-900'}`}
              >
                {t === 'account' ? 'Account No.' : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={queryType === 'email' ? 'email' : 'text'}
                placeholder={
                  queryType === 'phone' ? 'e.g. 07712 345678' :
                  queryType === 'email' ? 'your@email.com' :
                  'e.g. HW-001234'
                }
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && lookup()}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-300 focus:outline-none focus:border-amber-700 text-sm"
              />
            </div>
            <button
              onClick={lookup}
              disabled={loading || !query.trim()}
              className="bg-gray-900 hover:bg-amber-700 disabled:bg-gray-300 text-white px-5 py-2.5 font-semibold text-sm transition-colors"
            >
              {loading ? '...' : 'Search'}
            </button>
          </div>

          {notFound && (
            <p className="text-red-500 text-sm mt-3">No account found. Try a different search.</p>
          )}
          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

          <p className="text-xs text-gray-400 mt-4">
            Demo: try phone <strong>07700 900001</strong>, email <strong>emma.thompson@email.co.uk</strong>, or account <strong>HW-001234</strong>
          </p>
        </div>
      ) : (
        <div>
          {/* Customer card */}
          <div className="bg-white border border-gray-200 p-6 mb-6 flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <UserCircleIcon className="w-12 h-12 text-gray-300 flex-shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h2 className="font-bold text-gray-900 text-lg">
                    {customer.first_name} {customer.last_name}
                  </h2>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${TIER_STYLES[customer.tier]}`}>
                    {customer.tier}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{customer.email} &middot; {customer.phone}</p>
                <p className="text-sm text-gray-500">{customer.address_line1}, {customer.city}, {customer.postcode}</p>
                <p className="text-xs text-amber-700 font-medium mt-1">
                  {customer.loyalty_points.toLocaleString()} loyalty points &middot; Member since {new Date(customer.member_since).getFullYear()}
                </p>
              </div>
            </div>
            <button onClick={reset} className="text-xs text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap">
              Sign out
            </button>
          </div>

          {/* Orders */}
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Order History ({orders.length})</h3>
          {orders.length === 0 ? (
            <p className="text-gray-400 text-sm">No orders found.</p>
          ) : (
            <div className="space-y-3">
              {orders.map(order => (
                <div key={order.id} className="bg-white border border-gray-200 p-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-sm font-medium text-gray-900">{order.id.slice(0, 8).toUpperCase()}</span>
                        <span className={`text-xs font-medium px-2 py-0.5 border rounded-full capitalize ${STATUS_STYLES[order.status]}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">
                        {new Date(order.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        {order.delivery_method && <> &middot; {order.delivery_method}</>}
                      </p>
                      {order.tracking_number && (
                        <p className="text-xs text-gray-400 mt-0.5">Tracking: <span className="font-mono">{order.tracking_number}</span></p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">£{order.total_amount.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8">
            <Link to="/products" className="text-amber-700 hover:underline text-sm font-medium">
              Continue Shopping &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
