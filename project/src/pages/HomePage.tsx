import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { useStripe } from '../hooks/useStripe';
import { Search, Calendar, Users, DollarSign } from 'lucide-react';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { createCheckoutSession, isLoading } = useStripe({
    onSuccess: () => {
      navigate('/events');
    },
  });

  const handleCreatePotPool = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    await createCheckoutSession('SPORTS_MATCH');
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect Teammates
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Join SportsMatch to connect with athletes, form teams, and compete in local events. Create or join pot pools and take your game to the next level.
            </p>
            <div className="flex flex-wrap gap-4">
              {isAuthenticated ? (
                <>
                  <Link to="/discover">
                    <Button size="lg" leftIcon={<Search size={18} />}>
                      Find Teammates
                    </Button>
                  </Link>
                  <Link to="/events">
                    <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                      Browse Events
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/register">
                    <Button size="lg">
                      Sign Up Free
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                      Log In
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Features section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">
              SportsMatch connects athletes and sports enthusiasts in a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              onClick={() => isAuthenticated ? navigate('/discover') : navigate('/login')}
              className="bg-white p-6 rounded-xl shadow-md cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Find Players</h3>
              <p className="text-gray-600">
                Swipe through athlete profiles to find teammates with matching skills and interests for your favorite sports.
              </p>
            </div>
            
            <div 
              onClick={() => isAuthenticated ? navigate('/events') : navigate('/login')}
              className="bg-white p-6 rounded-xl shadow-md cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Join Events</h3>
              <p className="text-gray-600">
                Browse and join local sports events, from casual pickup games to competitive tournaments with prizes.
              </p>
            </div>
            
            <div 
              onClick={handleCreatePotPool}
              className="bg-white p-6 rounded-xl shadow-md cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Create Pot Pools</h3>
              <p className="text-gray-600">
                Set up events with entry fees and pot pools to add excitement and rewards to your sports activities.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to find your team?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-blue-100">
                  Join thousands of athletes connecting and competing every day.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                {isAuthenticated ? (
                  <Link to="/discover">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                      Start Matching
                    </Button>
                  </Link>
                ) : (
                  <Link to="/register">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                      Sign Up Free
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="font-bold text-lg">ST</span>
                </div>
                <span className="ml-2 text-xl font-bold">SportsMatch</span>
              </div>
              <p className="mt-4 text-gray-400">
                Connecting athletes and sports enthusiasts since 2025
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Features</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to={isAuthenticated ? "/discover" : "/login"} className="text-gray-400 hover:text-white">
                    Find Teammates
                  </Link>
                </li>
                <li>
                  <Link to={isAuthenticated ? "/events" : "/login"} className="text-gray-400 hover:text-white">
                    Join Events
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={handleCreatePotPool}
                    className="text-gray-400 hover:text-white"
                  >
                    Create Pot Pools
                  </button>
                </li>
                <li>
                  <Link to={isAuthenticated ? "/messages" : "/login"} className="text-gray-400 hover:text-white">
                    Messaging
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Community Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Safety Tips</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm text-center">
              © 2025 SportsMatch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;