import type { User } from './user'

export interface Skill {
  id: string
  title: string
  provider: User
  category: string
  price: string
  rating: number
  distance: string
  description: string
  availability: string[]
}
