// Define core types for the application

export type Sport = {
  id: string;
  name: string;
  icon: string;
};

export type User = {
  id: string;
  name: string;
  age: number;
  bio: string;
  location: string;
  profileImage: string;
  sports: UserSport[];
};

export type UserSport = {
  sportId: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro';
  yearsPlayed: number;
  preferredPosition?: string;
};

export type Event = {
  id: string;
  title: string;
  sportId: string;
  description: string;
  location: string;
  date: string;
  time: string;
  maxParticipants: number;
  currentParticipants: number;
  entryFee: number;
  potPool: number;
  hostId: string;
};

export type Match = {
  id: string;
  userId: string;
  matchedUserId: string;
  createdAt: string;
  status: 'pending' | 'accepted' | 'rejected';
};

export type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
};