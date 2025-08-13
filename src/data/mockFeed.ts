import type { FeedPost } from '../types/feed'
import type { User } from '../types/user'

const users: User[] = [
  { id: '1', name: 'Aarav Sharma', initials: 'AS', location: 'Indiranagar', isVerified: true, joinedDate: new Date('2022-01-10') },
  { id: '2', name: 'Priya Singh', initials: 'PS', location: 'Koramangala', isVerified: false, joinedDate: new Date('2023-03-15') },
  { id: '3', name: 'Rahul Verma', initials: 'RV', location: 'Jayanagar', isVerified: true, joinedDate: new Date('2021-11-20') },
  { id: '4', name: 'Sneha Patel', initials: 'SP', location: 'Whitefield', isVerified: false, joinedDate: new Date('2024-02-05') },
]

const mockFeed: FeedPost[] = [
  {
    id: '101',
    type: 'help-request',
    user: users[0],
    content: 'Need help setting up my WiFi router. Anyone nearby who can assist?',
    timestamp: new Date(),
    location: 'Indiranagar',
    distance: '1.2 km',
    likes: 3,
    comments: 2,
  },
  {
    id: '102',
    type: 'offer',
    user: users[1],
    content: 'Offering free yoga classes in the park this weekend! All levels welcome.',
    timestamp: new Date(),
    location: 'Koramangala',
    distance: '2.5 km',
    likes: 7,
    comments: 5,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '103',
    type: 'event',
    user: users[2],
    content: 'Community clean-up drive this Sunday. Join us at 8am near the lake.',
    timestamp: new Date(),
    location: 'Jayanagar',
    distance: '3.1 km',
    likes: 12,
    comments: 4,
  },
  {
    id: '104',
    type: 'announcement',
    user: users[3],
    content: 'Lost pet alert! Our golden retriever, Simba, is missing since last night. Please contact if seen.',
    timestamp: new Date(),
    location: 'Whitefield',
    distance: '5.0 km',
    likes: 2,
    comments: 1,
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80',
  },
  // ...add 11+ more posts for realism
]

export default mockFeed
