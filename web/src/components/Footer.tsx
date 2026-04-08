import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-serif text-xl font-bold text-white block mb-3">
              Hartley <span className="text-amber-500">&amp;</span> Webb
            </span>
            <p className="text-sm leading-relaxed">
              Quality goods for the discerning customer since 1887. Proudly serving families across the United Kingdom.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">All Departments</Link></li>
              <li><Link to="/products?department=clothing" className="hover:text-white transition-colors">Clothing</Link></li>
              <li><Link to="/products?department=home-furnishings" className="hover:text-white transition-colors">Home & Furnishings</Link></li>
              <li><Link to="/products?department=electricals" className="hover:text-white transition-colors">Electricals</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/account" className="hover:text-white transition-colors">Order Tracking</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns &amp; Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store Finder</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-xs text-center">
          &copy; {new Date().getFullYear()} Hartley &amp; Webb Ltd. Registered in England &amp; Wales. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
