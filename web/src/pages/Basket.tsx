import { Link } from 'react-router-dom'
import { useBasket } from '../context/BasketContext'
import { TrashIcon, PlusIcon, MinusIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function Basket() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearBasket } = useBasket()

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <ShoppingBagIcon className="w-16 h-16 text-gray-200 mx-auto mb-6" />
        <h1 className="font-serif text-3xl font-bold text-gray-900 mb-3">Your basket is empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
        <Link
          to="/products"
          className="inline-block bg-gray-900 hover:bg-amber-700 text-white font-semibold px-10 py-3 transition-colors uppercase text-sm tracking-wide"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900">
          Your Basket <span className="text-gray-400 text-xl font-normal">({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
        </h1>
        <button
          onClick={clearBasket}
          className="text-sm text-gray-400 hover:text-red-500 transition-colors"
        >
          Clear all
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-px">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex gap-4 bg-white border border-gray-200 p-4">
              {/* Thumbnail placeholder */}
              <Link to={`/products/${product.id}`} className="w-20 h-20 bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>

              <div className="flex-1 min-w-0">
                <div className="text-xs text-amber-700 mb-0.5 uppercase tracking-wide">{product.department_name}</div>
                <Link to={`/products/${product.id}`} className="font-medium text-gray-900 hover:text-amber-700 transition-colors text-sm line-clamp-2">
                  {product.name}
                </Link>
                <div className="text-xs text-gray-400 mt-0.5">{product.brand}</div>

                <div className="flex items-center justify-between mt-3">
                  {/* Quantity stepper */}
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <MinusIcon className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <PlusIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">£{(product.price * quantity).toFixed(2)}</span>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 border border-gray-200 p-6 sticky top-24">
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-5">Order Summary</h2>

            <div className="space-y-3 text-sm mb-5">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({totalItems} items)</span>
                <span>£{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span className={totalPrice >= 50 ? 'text-green-600 font-medium' : ''}>
                  {totalPrice >= 50 ? 'Free' : '£4.99'}
                </span>
              </div>
              {totalPrice < 50 && (
                <p className="text-xs text-gray-400">Spend £{(50 - totalPrice).toFixed(2)} more for free delivery</p>
              )}
              <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-900 text-base">
                <span>Total</span>
                <span>£{(totalPrice + (totalPrice >= 50 ? 0 : 4.99)).toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-gray-900 hover:bg-amber-700 text-white font-semibold py-3.5 transition-colors uppercase text-sm tracking-wide mb-3">
              Proceed to Checkout
            </button>
            <Link
              to="/products"
              className="block w-full text-center border border-gray-300 hover:border-gray-900 text-gray-700 font-medium py-3 text-sm transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
