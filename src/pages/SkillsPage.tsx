import React, { useState, useMemo } from 'react'
import SearchBar from '../components/skills/SearchBar'
import CategoryTabs from '../components/skills/CategoryTabs'
import SkillList from '../components/skills/SkillList'
import mockSkills from '../data/mockSkills'

const SkillsPage: React.FC = () => {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [connected, setConnected] = useState<string[]>([])

  const filtered = useMemo(() =>
    mockSkills.filter(skill =>
      (category === 'All' || skill.category === category) &&
      (skill.title.toLowerCase().includes(query.toLowerCase()) ||
        skill.provider.name.toLowerCase().includes(query.toLowerCase()))
    ),
    [query, category]
  )

  const handleConnect = (id: string) => {
    setConnected(ids => [...ids, id])
  }

  return (
    <div className="flex flex-col gap-2">
      <SearchBar value={query} onChange={setQuery} />
      <CategoryTabs active={category} onChange={setCategory} />
      <SkillList
        skills={filtered.map(skill => ({ ...skill, isConnected: connected.includes(skill.id) }))}
        onConnect={handleConnect}
      />
    </div>
  )
}

export default SkillsPage
