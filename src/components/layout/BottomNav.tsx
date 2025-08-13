import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Users, Handshake, Calendar } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/skills', label: 'Skills', icon: Handshake },
  { to: '/events', label: 'Events', icon: Calendar },
  { to: '/groups', label: 'Groups', icon: Users },
]

const BottomNav: React.FC = () => (
  <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-mobile bg-white bg-opacity-90 border-t border-gray-200 flex justify-around py-2 z-20 rounded-b-card shadow-card">
    {navItems.map(({ to, label, icon: Icon }) => (
      <NavLink
        key={to}
        to={to}
        className={({ isActive }) =>
          `flex flex-col items-center text-xs px-2 py-1 transition-colors ${isActive ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-500'}`
        }
        end={to === '/'}
      >
        <Icon className="w-6 h-6 mb-0.5" />
        {label}
      </NavLink>
    ))}
  </nav>
)

export default BottomNav
