import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import EventsPage from './pages/EventsPage'
import GroupsPage from './pages/GroupsPage'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="groups" element={<GroupsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
