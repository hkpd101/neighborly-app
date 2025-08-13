import React from 'react'
import type { Skill } from '../../types/skills'
import SkillCard from './SkillCard'

interface SkillListProps {
  skills: Skill[]
  onConnect: (skillId: string) => void
}

const SkillList: React.FC<SkillListProps> = ({ skills, onConnect }) => (
  <div className="mt-2">
    {skills.map(skill => (
      <SkillCard key={skill.id} skill={skill} onConnect={onConnect} />
    ))}
  </div>
)

export default SkillList
