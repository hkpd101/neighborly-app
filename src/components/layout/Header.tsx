import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white bg-opacity-80 sticky top-0 z-10 rounded-t-card">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-700">Bengaluru, India</span>
        <span className="ml-1 text-xs text-emerald-600 bg-emerald-100 rounded-pill px-2 py-0.5">Nearby</span>
      </div>
      <div className="flex items-center gap-3">
        <button aria-label="Notifications" className="relative p-2 rounded-full hover:bg-gray-100 transition">
          {/* Notification Icon Placeholder */}
          <span className="w-2 h-2 bg-orange-500 rounded-full absolute top-1 right-1"></span>
        </button>
        <button aria-label="User Profile" className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow">
          K
        </button>
      </div>
    </header>
  )
}

export default Header
