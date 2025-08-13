import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'
import BottomNav from '../components/layout/BottomNav'

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-emerald-500 to-teal-500">
      <div className="w-full max-w-mobile flex flex-col flex-1 bg-white bg-opacity-80 shadow-card rounded-none md:rounded-card min-h-screen">
        <Header />
        <main className="flex-1 px-2 pb-20 pt-2">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  )
}

export default MainLayout
