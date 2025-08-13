import React from 'react'
import QuickActionGrid from '../components/feed/QuickActionGrid'
import FeedContainer from '../components/feed/FeedContainer'

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <QuickActionGrid />
      <FeedContainer />
    </div>
  )
}

export default HomePage
