import { Sport, User, Event } from '../types';

export const mockSports: Sport[] = [
  { id: '1', name: 'Basketball', icon: 'basketball' },
  { id: '2', name: 'Football', icon: 'football' },
  { id: '3', name: 'Tennis', icon: 'tennis' },
  { id: '4', name: 'Volleyball', icon: 'volleyball' },
  { id: '5', name: 'Swimming', icon: 'swim' },
  { id: '6', name: 'Soccer', icon: 'soccer' },
  { id: '7', name: 'Baseball', icon: 'baseball' },
  { id: '8', name: 'Cricket', icon: 'cricket' },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    age: 28,
    bio: 'Basketball enthusiast looking for pickup games and tournaments.',
    location: 'Los Angeles, CA',
    profileImage: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sports: [
      { sportId: '1', skillLevel: 'Advanced', yearsPlayed: 10, preferredPosition: 'Point Guard' },
      { sportId: '6', skillLevel: 'Intermediate', yearsPlayed: 5 }
    ]
  },
  {
    id: '2',
    name: 'Samantha Lee',
    age: 25,
    bio: 'Tennis player looking for doubles partner. Also enjoy volleyball on weekends.',
    location: 'New York, NY',
    profileImage: 'https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sports: [
      { sportId: '3', skillLevel: 'Advanced', yearsPlayed: 8 },
      { sportId: '4', skillLevel: 'Intermediate', yearsPlayed: 4 }
    ]
  },
  {
    id: '3',
    name: 'Michael Chen',
    age: 30,
    bio: 'Former college soccer player looking for adult leagues and friendly matches.',
    location: 'Chicago, IL',
    profileImage: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sports: [
      { sportId: '6', skillLevel: 'Pro', yearsPlayed: 15, preferredPosition: 'Midfielder' },
      { sportId: '2', skillLevel: 'Beginner', yearsPlayed: 1 }
    ]
  },
  {
    id: '4',
    name: 'Jordan Taylor',
    age: 24,
    bio: 'Looking for basketball and volleyball teams. Available most evenings and weekends.',
    location: 'Miami, FL',
    profileImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sports: [
      { sportId: '1', skillLevel: 'Intermediate', yearsPlayed: 6, preferredPosition: 'Shooting Guard' },
      { sportId: '4', skillLevel: 'Advanced', yearsPlayed: 9 }
    ]
  },
  {
    id: '5',
    name: 'Emma Wilson',
    age: 27,
    bio: 'Competitive swimmer and recreational tennis player seeking training partners.',
    location: 'Seattle, WA',
    profileImage: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sports: [
      { sportId: '5', skillLevel: 'Pro', yearsPlayed: 12 },
      { sportId: '3', skillLevel: 'Intermediate', yearsPlayed: 5 }
    ]
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: '3v3 Basketball Tournament',
    sportId: '1',
    description: 'Looking for teams to join our 3v3 tournament. Prize pool for winners!',
    location: 'Venice Beach Courts, Los Angeles',
    date: '2025-07-15',
    time: '10:00 AM',
    maxParticipants: 24,
    currentParticipants: 15,
    entryFee: 25,
    potPool: 600,
    hostId: '1'
  },
  {
    id: '2',
    title: 'Tennis Doubles Meetup',
    sportId: '3',
    description: 'Casual tennis doubles games for all skill levels. Come find a partner!',
    location: 'Central Park Tennis Courts, New York',
    date: '2025-07-08',
    time: '4:00 PM',
    maxParticipants: 16,
    currentParticipants: 10,
    entryFee: 10,
    potPool: 160,
    hostId: '2'
  },
  {
    id: '3',
    title: 'Weekend Soccer League',
    sportId: '6',
    description: 'Forming teams for our weekend soccer league. Season starts in July.',
    location: 'Grant Park, Chicago',
    date: '2025-07-05',
    time: '9:00 AM',
    maxParticipants: 66,
    currentParticipants: 42,
    entryFee: 50,
    potPool: 2100,
    hostId: '3'
  }
];