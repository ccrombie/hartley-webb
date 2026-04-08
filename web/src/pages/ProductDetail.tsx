import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { api } from '../lib/api'
import type { Product, Inventory } from '../lib/api'
import { useBasket } from '../context/BasketContext'
import { ShoppingBagIcon, ChevronLeftIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [inventory, setInventory] = useState<Inventory | null>(null)
  const [loading, setLoading] = useState(true)
  const [added, setAdded] = useState(false)
  const { addItem, items } = useBasket()

  useEffect(() => {
    if (!id) return
    setLoading(true)
    Promise.all([
      api.getProduct(id).then(r => setProduct(r.product)),
      api.getInventory(id).then(r => setInventory(r.inventory)).catch(() => {}),
    ]).finally(() => setLoading(false))
  }, [id])

  const basketQty = items.find(i => i.product.id === id)?.quantity ?? 0

  const handleAdd = () => {
    if (!product) return
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse grid md:grid-cols-2 gap-10">
          <div className="bg-gray-100 aspect-square rounded" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-100 rounded w-1/4" />
            <div className="h-8 bg-gray-100 rounded w-3/4" />
            <div className="h-4 bg-gray-100 rounded w-1/3" />
            <div className="h-20 bg-gray-100 rounded" />
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-24 text-center text-gray-400">
        <p>Product not found.</p>
        <Link to="/products" className="text-amber-700 underline mt-2 inline-block">Back to shop</Link>
      </div>
    )
  }

  const stockColor =
    inventory?.status === 'in_stock' ? 'text-green-600' :
    inventory?.status === 'low_stock' ? 'text-amber-600' : 'text-red-500'

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/products" className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900 text-sm mb-8 transition-colors">
        <ChevronLeftIcon className="w-4 h-4" />
        Back to shop
      </Link>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Image placeholder */}
        <div className="bg-gray-100 aspect-square flex items-center justify-center text-gray-300">
          <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="text-xs text-amber-700 font-medium uppercase tracking-widest mb-2">
            <Link to={`/products?department=${product.department_name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:underline">
              {product.department_name}
            </Link>
          </div>

          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-gray-500 text-sm mb-4">{product.brand} &middot; SKU: {product.sku}</p>

          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

          <div className="text-3xl font-bold text-gray-900 mb-2">£{product.price.toFixed(2)}</div>

          {inventory && (
            <div className={`text-sm font-medium mb-6 ${stockColor}`}>
              {inventory.status_label}
              {inventory.status === 'in_stock' && (
                <span className="text-gray-400 font-normal"> &mdash; {inventory.stock_level} in stock</span>
              )}
            </div>
          )}

          <div className="flex gap-3 mt-auto">
            <button
              onClick={handleAdd}
              disabled={inventory?.in_stock === false}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 font-semibold uppercase tracking-wide text-sm transition-colors
                ${added ? 'bg-green-600 text-white' :
                  inventory?.in_stock === false ? 'bg-gray-200 text-gray-400 cursor-not-allowed' :
                  'bg-gray-900 hover:bg-amber-700 text-white'}`}
            >
              {added ? (
                <><CheckIcon className="w-5 h-5" /> Added!</>
              ) : (
                <><ShoppingBagIcon className="w-5 h-5" /> Add to Basket</>
              )}
            </button>
            <Link
              to="/basket"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-3 px-5 font-semibold text-sm transition-colors relative"
            >
              Basket
              {basketQty > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {basketQty}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
