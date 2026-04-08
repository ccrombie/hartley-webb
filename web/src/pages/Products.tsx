import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { api } from '../lib/api'
import type { Product, Department } from '../lib/api'
import ProductCard from '../components/ProductCard'
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [departments, setDepartments] = useState<Department[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  const search = searchParams.get('search') || ''
  const department = searchParams.get('department') || ''

  const load = useCallback(() => {
    setLoading(true)
    const params: Record<string, string> = {}
    if (search) params.search = search
    if (department) params.department = department
    api.getProducts(params)
      .then(r => { setProducts(r.products); setTotal(r.count) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [search, department])

  useEffect(() => { load() }, [load])
  useEffect(() => { api.getDepartments().then(r => setDepartments(r.departments)).catch(() => {}) }, [])

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  const activeDept = departments.find(d => d.slug === department)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900">
          {activeDept ? activeDept.name : 'All Products'}
        </h1>
        {!loading && <p className="text-gray-500 text-sm mt-1">{total} products</p>}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            defaultValue={search}
            onChange={e => setParam('search', e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 focus:outline-none focus:border-amber-700 text-sm"
          />
        </div>
        <div className="relative flex items-center gap-2">
          <FunnelIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <select
            value={department}
            onChange={e => setParam('department', e.target.value)}
            className="border border-gray-300 focus:outline-none focus:border-amber-700 text-sm py-2 px-3 bg-white appearance-none pr-8"
          >
            <option value="">All Departments</option>
            {departments.map(d => (
              <option key={d.id} value={d.slug}>{d.name}</option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-100 aspect-[3/4] rounded" />
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-24 text-gray-400">
          <p className="text-lg">No products found.</p>
          <button onClick={() => setSearchParams({})} className="mt-3 text-amber-700 underline text-sm">Clear filters</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  )
}
