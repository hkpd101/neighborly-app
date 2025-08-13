import type { Skill } from '../types/skills'
import type { User } from '../types/user'

const users: User[] = [
  { id: '1', name: 'Aarav Sharma', initials: 'AS', location: 'Indiranagar', isVerified: true, joinedDate: new Date('2022-01-10') },
  { id: '2', name: 'Priya Singh', initials: 'PS', location: 'Koramangala', isVerified: false, joinedDate: new Date('2023-03-15') },
  { id: '3', name: 'Rahul Verma', initials: 'RV', location: 'Jayanagar', isVerified: true, joinedDate: new Date('2021-11-20') },
  { id: '4', name: 'Sneha Patel', initials: 'SP', location: 'Whitefield', isVerified: false, joinedDate: new Date('2024-02-05') },
]

const mockSkills: Skill[] = [
  {
    id: 's1',
    title: 'Math Tutoring',
    provider: users[0],
    category: 'Teaching',
    price: '₹500/hr',
    rating: 4.8,
    distance: '1.2 km',
    description: 'Personalized math tutoring for school students. All levels welcome.',
    availability: ['Mon', 'Wed', 'Fri'],
  },
  {
    id: 's2',
    title: 'Plumbing Services',
    provider: users[1],
    category: 'Home',
    price: '₹300/visit',
    rating: 4.5,
    distance: '2.0 km',
    description: 'Quick and reliable plumbing repairs and installations.',
    availability: ['Tue', 'Thu', 'Sat'],
  },
  {
    id: 's3',
    title: 'Yoga Instructor',
    provider: users[2],
    category: 'Health',
    price: '₹400/session',
    rating: 5.0,
    distance: '2.5 km',
    description: 'Certified yoga instructor for all age groups. Group and private sessions.',
    availability: ['Sat', 'Sun'],
  },
  {
    id: 's4',
    title: 'Computer Repair',
    provider: users[3],
    category: 'Tech',
    price: '₹600/visit',
    rating: 4.2,
    distance: '3.5 km',
    description: 'Hardware and software troubleshooting for laptops and desktops.',
    availability: ['Mon', 'Thu'],
  },
  // ...add 16+ more skills for realism
]

export default mockSkills
