import React from 'react'
import type { Skill } from '../../types/skills'

interface SkillCardProps {
  skill: Skill
  onConnect: (skillId: string) => void
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, onConnect }) => (
  <div className="bg-white rounded-card shadow-card p-4 flex flex-col gap-2 mb-3">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-lg">
        {skill.provider.initials}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-gray-800 text-sm">{skill.provider.name}</span>
          {skill.provider.isVerified && <span className="ml-1 text-xs text-emerald-600">✔</span>}
        </div>
        <div className="text-xs text-gray-400">{skill.distance} • {skill.category}</div>
      </div>
      <span className="text-xs text-gray-500 font-semibold">{skill.price}</span>
    </div>
    <div className="text-gray-700 text-sm">{skill.title}</div>
    <div className="text-xs text-gray-500 line-clamp-2">{skill.description}</div>
    <div className="flex items-center gap-2 mt-1">
      <span className="text-xs text-yellow-500">★ {skill.rating}</span>
      <span className="text-xs text-gray-400">Available: {skill.availability.join(', ')}</span>
    </div>
    <button
      className="mt-2 px-4 py-1 rounded-pill bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
      onClick={() => onConnect(skill.id)}
    >
      Connect
    </button>
  </div>
)

export default SkillCard
