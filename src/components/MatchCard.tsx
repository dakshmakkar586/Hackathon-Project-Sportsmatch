import React from 'react';
import { User, Sport } from '../types';
import { mockSports } from '../data/mockData';
import Card from './ui/Card';
import { X, Check, Star } from 'lucide-react';

interface MatchCardProps {
  user: User;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const getSportName = (sportId: string): string => {
  const sport = mockSports.find(s => s.id === sportId);
  return sport ? sport.name : 'Unknown Sport';
};

const getSkillLevelColor = (level: string): string => {
  switch (level) {
    case 'Beginner': return 'bg-blue-100 text-blue-800';
    case 'Intermediate': return 'bg-green-100 text-green-800';
    case 'Advanced': return 'bg-purple-100 text-purple-800';
    case 'Pro': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const MatchCard: React.FC<MatchCardProps> = ({ user, onSwipeLeft, onSwipeRight }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Card className="h-[32rem] transition-transform duration-300">
        <div className="relative h-2/3 bg-gray-200">
          <img 
            src={user.profileImage} 
            alt={user.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h2 className="text-2xl font-bold text-white">{user.name}, {user.age}</h2>
            <p className="text-white/80">{user.location}</p>
          </div>
        </div>
        
        <div className="p-4 h-1/3 overflow-y-auto">
          <p className="text-gray-700 mb-3">{user.bio}</p>
          
          <h3 className="font-semibold text-gray-900 mb-2">Sports</h3>
          <div className="space-y-2">
            {user.sports.map((sport, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-2">
                    <Star size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-800">{getSportName(sport.sportId)}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSkillLevelColor(sport.skillLevel)}`}>
                  {sport.skillLevel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
        <button 
          onClick={onSwipeLeft}
          className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg transform transition hover:scale-110"
        >
          <X size={24} className="text-red-500" />
        </button>
        <button 
          onClick={onSwipeRight}
          className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg transform transition hover:scale-110"
        >
          <Check size={24} className="text-green-500" />
        </button>
      </div>
    </div>
  );
};

export default MatchCard;