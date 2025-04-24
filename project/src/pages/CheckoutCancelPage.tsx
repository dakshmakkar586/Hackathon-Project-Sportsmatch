import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const CheckoutCancelPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <XCircle className="w-16 h-16 text-red-500 mx-auto" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Cancelled
        </h1>
        
        <p className="text-gray-600 mb-8">
          Your payment was cancelled. No charges were made to your account.
        </p>
        
        <div className="space-y-4">
          <Link to="/events">
            <Button variant="primary" isFullWidth>
              Return to Events
            </Button>
          </Link>
          
          <Link to="/">
            <Button variant="outline" isFullWidth>
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCancelPage;