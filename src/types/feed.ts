import { User } from './user'

export interface FeedPost {
  id: string
  type: 'help-request' | 'offer' | 'event' | 'announcement'
  user: User
  content: string
  image?: string
  timestamp: Date
  location: string
  distance: string
  likes: number
  comments: number
  isLiked?: boolean
}
