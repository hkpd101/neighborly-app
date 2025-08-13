import React, { useState } from 'react'

interface SearchBarProps {
  value: string
  onChange: (v: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <div className="flex items-center bg-gray-100 rounded-pill px-3 py-2 mb-2">
    <input
      type="text"
      className="flex-1 bg-transparent outline-none text-sm"
      placeholder="Search skills, providers..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
    <span className="ml-2 text-gray-400">🔍</span>
  </div>
)

export default SearchBar
