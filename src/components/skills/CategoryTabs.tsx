import React from 'react'

const categories = [
  'All',
  'Tech',
  'Home',
  'Teaching',
  'Health',
  'Art',
  'Fitness',
  'Other',
]

interface CategoryTabsProps {
  active: string
  onChange: (cat: string) => void
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ active, onChange }) => (
  <div className="flex gap-2 overflow-x-auto pb-2">
    {categories.map(cat => (
      <button
        key={cat}
        className={`px-4 py-1 rounded-pill text-sm font-medium border transition whitespace-nowrap ${active === cat ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-emerald-100'}`}
        onClick={() => onChange(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
)

export default CategoryTabs
