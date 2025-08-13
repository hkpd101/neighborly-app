import React from 'react'
import { FeedPost } from '../../types/feed'
import { Heart, MessageCircle } from 'lucide-react'

interface FeedItemProps {
  post: FeedPost
  onLike: (id: string) => void
}

const FeedItem: React.FC<FeedItemProps> = ({ post, onLike }) => {
  return (
    <div className="bg-white rounded-card shadow-card p-4 mb-3 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">
          {post.user.initials}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-800 text-sm">{post.user.name}</span>
            {post.user.isVerified && <span className="ml-1 text-xs text-emerald-600">✔</span>}
          </div>
          <div className="text-xs text-gray-400">{post.location} • {post.distance}</div>
        </div>
        <span className="text-xs text-gray-400">{post.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
      <div className="text-gray-700 text-sm whitespace-pre-line">{post.content}</div>
      {post.image && <img src={post.image} alt="post" className="rounded-md w-full object-cover max-h-48" loading="lazy" />}
      <div className="flex items-center gap-4 mt-2">
        <button
          className={`flex items-center gap-1 text-sm ${post.isLiked ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-500'} transition`}
          onClick={() => onLike(post.id)}
        >
          <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-emerald-500' : 'stroke-2'}`} />
          {post.likes}
        </button>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <MessageCircle className="w-5 h-5" />
          {post.comments}
        </div>
      </div>
    </div>
  )
}

export default FeedItem
