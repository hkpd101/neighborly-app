export interface User {
  id: string
  name: string
  initials: string
  location: string
  distance?: string
  avatar?: string
  isVerified: boolean
  rating?: number
  joinedDate: Date
}
