import React, { useState } from 'react'
import FeedItem from './FeedItem'
import type { FeedPost } from '../../types/feed'
import mockFeed from '../../data/mockFeed'

const FeedContainer: React.FC = () => {
  const [posts, setPosts] = useState<FeedPost[]>(mockFeed)

  const handleLike = (id: string) => {
    setPosts(posts =>
      posts.map(post =>
        post.id === id
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    )
  }

  return (
    <div className="mt-2">
      {posts.map(post => (
        <FeedItem key={post.id} post={post} onLike={handleLike} />
      ))}
      {/* Infinite scroll trigger would go here */}
    </div>
  )
}

export default FeedContainer
