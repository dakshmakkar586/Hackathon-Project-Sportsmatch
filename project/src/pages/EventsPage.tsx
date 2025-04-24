import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { Event } from '../types';
import { mockEvents, mockSports } from '../data/mockData';
import Button from '../components/ui/Button';
import { Search, Filter } from 'lucide-react';

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    // In a real app, you'd fetch events from an API
    setEvents(mockEvents);
  }, []);
  
  const handleJoinEvent = (eventId: string) => {
    // In a real app, you would update the backend
    // For now, we'll just update the UI
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, currentParticipants: event.currentParticipants + 1 } 
        : event
    ));
    
    // In a real app, this would open the payment process
    alert(`You're joining event: ${eventId}. In a real app, this would open the payment flow.`);
  };
  
  const filteredEvents = events.filter(event => {
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by selected sport
    const matchesSport = selectedSport === '' || event.sportId === selectedSport;
    
    return matchesSearch && matchesSport;
  });
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Upcoming Events</h1>
          
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search events..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              leftIcon={<Filter size={16} />}
            >
              Filters
            </Button>
          </div>
        </div>
        
        {showFilters && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-6 animate-fadeIn">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Filter by Sport</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSport('')}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedSport === '' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                All Sports
              </button>
              
              {mockSports.map(sport => (
                <button
                  key={sport.id}
                  onClick={() => setSelectedSport(sport.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedSport === sport.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {sport.name}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <EventCard 
                key={event.id} 
                event={event} 
                onJoin={handleJoinEvent} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-3">No events match your search criteria</p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedSport('');
              }}
              variant="outline"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;