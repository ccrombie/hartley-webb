import { Link, NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useBasket } from '../context/BasketContext'

export default function Header() {
  const { totalItems } = useBasket()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-gray-900 tracking-tight">
              Hartley <span className="text-amber-700">&amp;</span> Webb
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-amber-700' : 'text-gray-600 hover:text-gray-900'}`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-amber-700' : 'text-gray-600 hover:text-gray-900'}`
              }
            >
              My Account
            </NavLink>
          </nav>

          {/* Basket */}
          <Link to="/basket" className="relative flex items-center gap-1.5 text-gray-700 hover:text-gray-900 transition-colors">
            <ShoppingBagIcon className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
