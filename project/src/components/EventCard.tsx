import React from 'react';
import { Event } from '../types';
import { mockSports } from '../data/mockData';
import Card, { CardBody, CardFooter } from './ui/Card';
import Button from './ui/Button';
import { Calendar, MapPin, Users, DollarSign } from 'lucide-react';

interface EventCardProps {
  event: Event;
  onJoin: (eventId: string) => void;
}

const getSportName = (sportId: string): string => {
  const sport = mockSports.find(s => s.id === sportId);
  return sport ? sport.name : 'Unknown Sport';
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

const EventCard: React.FC<EventCardProps> = ({ event, onJoin }) => {
  const isFullyBooked = event.currentParticipants >= event.maxParticipants;
  const spotsRemaining = event.maxParticipants - event.currentParticipants;
  
  return (
    <Card hoverEffect className="max-w-sm">
      <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
        <h3 className="text-xl font-bold text-white">{getSportName(event.sportId)}</h3>
      </div>
      
      <CardBody>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <Calendar size={18} className="mr-2 text-blue-500" />
            <span>{event.date} at {event.time}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <MapPin size={18} className="mr-2 text-blue-500" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Users size={18} className="mr-2 text-blue-500" />
            <span>
              {event.currentParticipants} / {event.maxParticipants} participants
              {!isFullyBooked && (
                <span className="ml-1 text-green-600">
                  ({spotsRemaining} spot{spotsRemaining !== 1 ? 's' : ''} left)
                </span>
              )}
            </span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <DollarSign size={18} className="mr-2 text-blue-500" />
            <span>Entry fee: {formatCurrency(event.entryFee)}</span>
          </div>
        </div>
      </CardBody>
      
      <CardFooter className="bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-700 font-medium">Pot pool</p>
            <p className="text-lg font-bold text-green-600">{formatCurrency(event.potPool)}</p>
          </div>
          <Button 
            onClick={() => onJoin(event.id)}
            disabled={isFullyBooked}
            variant={isFullyBooked ? 'outline' : 'primary'}
          >
            {isFullyBooked ? 'Fully Booked' : 'Join Event'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;