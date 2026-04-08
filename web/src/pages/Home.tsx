import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'
import type { Department, Product } from '../lib/api'
import ProductCard from '../components/ProductCard'

const HERO_DEPARTMENTS = [
  { slug: 'clothing', label: 'Clothing', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80' },
  { slug: 'home-furnishings', label: 'Home & Furnishings', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
  { slug: 'electricals', label: 'Electricals', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80' },
  { slug: 'beauty-fragrance', label: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80' },
]

export default function Home() {
  const [departments, setDepartments] = useState<Department[]>([])
  const [featured, setFeatured] = useState<Product[]>([])

  useEffect(() => {
    api.getDepartments().then(r => setDepartments(r.departments)).catch(() => {})
    api.getProducts({ limit: '8' }).then(r => setFeatured(r.products)).catch(() => {})
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <p className="font-serif text-amber-400 text-lg mb-4 tracking-widest uppercase">Est. 1887</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hartley &amp; Webb
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto mb-10">
            Quality goods for the discerning customer. From clothing to home furnishings, electricals to beauty.
          </p>
          <Link
            to="/products"
            className="inline-block bg-amber-700 hover:bg-amber-600 text-white font-semibold px-10 py-4 rounded-none transition-colors tracking-wide uppercase text-sm"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Department tiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Department</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HERO_DEPARTMENTS.map(dept => (
            <Link
              key={dept.slug}
              to={`/products?department=${dept.slug}`}
              className="group relative overflow-hidden rounded bg-gray-100 aspect-square block"
            >
              <img
                src={dept.image}
                alt={dept.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-end p-4">
                <span className="text-white font-semibold text-sm md:text-base font-serif">{dept.label}</span>
              </div>
            </Link>
          ))}
        </div>
        {departments.length > 4 && (
          <div className="text-center mt-6">
            <Link to="/products" className="text-amber-700 hover:text-amber-600 font-medium text-sm underline underline-offset-4">
              View all {departments.length} departments
            </Link>
          </div>
        )}
      </section>

      {/* Featured products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-block border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-10 py-3 transition-colors uppercase text-sm tracking-wide"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: '🚚', title: 'Free Delivery', sub: 'On orders over £50' },
              { icon: '↩️', title: 'Easy Returns', sub: '28 days no quibble' },
              { icon: '🏆', title: 'Loyalty Rewards', sub: 'Points on every purchase' },
              { icon: '💬', title: '24/7 Support', sub: 'Always here to help' },
            ].map(item => (
              <div key={item.title}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                <div className="text-gray-500 text-xs mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
