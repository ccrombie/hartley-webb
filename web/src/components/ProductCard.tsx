import { Link } from 'react-router-dom'
import { useBasket } from '../context/BasketContext'
import type { Product } from '../lib/api'
import { getProductImage } from '../lib/productImages'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useBasket()
  const image = getProductImage(product.id)

  return (
    <div className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all flex flex-col">
      <Link to={`/products/${product.id}`} className="block overflow-hidden bg-gray-50 aspect-[4/3]">
        {image ? (
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-amber-700 font-medium uppercase tracking-wide mb-1">{product.department_name}</div>
        <Link to={`/products/${product.id}`} className="font-medium text-gray-900 hover:text-amber-700 transition-colors text-sm leading-snug mb-1 line-clamp-2">
          {product.name}
        </Link>
        <div className="text-xs text-gray-400 mb-3">{product.brand}</div>
        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="font-bold text-gray-900">£{product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            className="text-xs bg-gray-900 hover:bg-amber-700 text-white px-3 py-1.5 transition-colors font-medium uppercase tracking-wide"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
