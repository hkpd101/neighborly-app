import React from 'react'
import { Handshake, HelpCircle, Calendar, Users } from 'lucide-react'

const actions = [
  { label: 'Find Help', icon: HelpCircle, color: 'emerald' },
  { label: 'Offer Help', icon: Handshake, color: 'teal' },
  { label: 'Events', icon: Calendar, color: 'purple' },
  { label: 'Groups', icon: Users, color: 'blue' },
]

const QuickActionGrid: React.FC = () => (
  <div className="grid grid-cols-4 gap-2 my-2">
    {actions.map(({ label, icon: Icon, color }) => (
      <button
        key={label}
        className={`flex flex-col items-center justify-center p-2 rounded-pill bg-${color}-100 hover:bg-${color}-200 transition group`}
        aria-label={label}
      >
        <Icon className={`w-6 h-6 mb-1 text-${color}-600 group-hover:scale-110 transition`} />
        <span className="text-xs font-medium text-gray-700 group-hover:text-${color}-700">{label}</span>
      </button>
    ))}
  </div>
)

export default QuickActionGrid
