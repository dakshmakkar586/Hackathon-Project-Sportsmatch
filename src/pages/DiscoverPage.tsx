import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard';
import { User } from '../types';
import { mockUsers } from '../data/mockData';
import { Filter } from 'lucide-react';

const DiscoverPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  
  useEffect(() => {
    // In a real app, you'd fetch users from an API
    // For demo purposes, we'll use the mock data
    setUsers(mockUsers);
  }, []);
  
  const handleSwipeLeft = () => {
    // In a real app, you would track this decision
    // and use it to improve future recommendations
    console.log('Rejected user:', users[currentIndex].id);
    goToNextUser();
  };
  
  const handleSwipeRight = () => {
    // In a real app, you would create a match request
    // and notify both users if it's a mutual match
    console.log('Liked user:', users[currentIndex].id);
    goToNextUser();
  };
  
  const goToNextUser = () => {
    // Move to the next user or cycle back to the beginning if we're at the end
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };
  
  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };
  
  const toggleSportFilter = (sportId: string) => {
    setSelectedSports(prev => {
      if (prev.includes(sportId)) {
        return prev.filter(id => id !== sportId);
      } else {
        return [...prev, sportId];
      }
    });
  };
  
  // Filter users based on selected sports
  const filteredUsers = selectedSports.length > 0
    ? users.filter(user => user.sports.some(sport => selectedSports.includes(sport.sportId)))
    : users;
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Discover Teammates</h1>
          <button 
            onClick={toggleFilterMenu}
            className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <Filter size={16} className="mr-2" />
            Filter
          </button>
        </div>
        
        {showFilterMenu && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Filter by Sports</h2>
            <div className="flex flex-wrap gap-2">
              {mockUsers.flatMap(user => user.sports)
                .filter((sport, index, self) => 
                  index === self.findIndex(s => s.sportId === sport.sportId)
                )
                .map(sport => {
                  const sportName = mockUsers.find(user => 
                    user.sports.some(s => s.sportId === sport.sportId)
                  )?.sports.find(s => s.sportId === sport.sportId)?.sportId;
                  
                  const isSelected = selectedSports.includes(sport.sportId);
                  
                  return (
                    <button
                      key={sport.sportId}
                      onClick={() => toggleSportFilter(sport.sportId)}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isSelected 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {sportName}
                    </button>
                  );
                })}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-center">
          {filteredUsers.length > 0 ? (
            <MatchCard 
              user={filteredUsers[currentIndex % filteredUsers.length]} 
              onSwipeLeft={handleSwipeLeft} 
              onSwipeRight={handleSwipeRight} 
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No users match your filters</p>
              <button
                onClick={() => setSelectedSports([])}
                className="mt-3 text-blue-600 hover:text-blue-800"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;