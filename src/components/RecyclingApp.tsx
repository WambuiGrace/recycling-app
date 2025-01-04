"use client";
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Bell, User, BookOpen, Calendar, MessageSquare } from 'react-feather';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

type NotificationType = {
  id: number;
  message: string;
  type: string;
};

type ActivityType = {
  id: number;
  type: string;
  points: number;
  date: string;
};

type UserType = {
  name: string;
  email: string;
  points: number;
  rank: string;
};

const RecyclingApp = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const notifications: NotificationType[] = [
    { id: 1, message: 'You have earned 10 points!', type: 'success' },
    { id: 2, message: 'New workshop available', type: 'info' },
  ];

  const activities: ActivityType[] = [
    { id: 1, type: 'Recycled Plastic', points: 10, date: '2023-10-01' },
    { id: 2, type: 'Attended Workshop', points: 20, date: '2023-10-02' },
  ];

  const user: UserType = {
    name: 'Sara Danvers',
    email: 'saradanvers51@gmail.com',
    points: 1250,
    rank: 'Eco Warrior',
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return (
          <div className="p-4 flex justify-center">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
              <div className="mb-8 text-center"> <br /><br />
                <h1 className="text-3xl font-bold text-gray-900">Make Recycling Rewarding</h1>
                <p className="text-2xl text-gray-700"> <br />
                  Join our community to make recycling easier and more rewarding. Track your impact, earn points, and learn how to make a difference.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  onClick={() => setCurrentTab('workshops')}
                >
                  Find Collection Points
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => setCurrentTab('resources')}
                >
                  Learn More
                </button>
              </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Your Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-base">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Points earned</span>
                      <span className="font-bold text-green-600">1250</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Rank</span>
                      <span className="font-bold text-blue-600">Eco Warrior</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className='mt-4'>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-base">
                    {activities.map(activity => (
                      <div key={activity.id} className="flex justify-between items-center">
                        <span className="text-gray-600">{activity.type}</span>
                        <span className="font-medium text-green-600">+{activity.points} pts</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
        //Resources link
        case 'resources':
          return (
            <div className="p-4 flex justify-center">
              <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 flex justify-center">Educational Resources</h2>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {/* Article section */}
                    <div className="w-full mb-6 col-span-full">
                      <h3 className="text-xl font-semibold text-gray-800">Articles</h3>
                      <p className="text-gray-600">Explore in-depth articles on the impact of plastic pollution.</p>
                    </div>
                    <Card className="w-full px-2 mb-4">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-900">Article 1</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img src="1.jpg" alt="Article 1" className="mb-4 w-full h-32 object-cover" />
                        <p className="text-gray-700">The Impact of Plastic Pollution on Marine Life</p>
                      </CardContent>
                    </Card>
                    <Card className="w-full px-2 mb-4">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-900">Article 2</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img src="1.jpg" alt="Article 2" className="mb-4 w-full h-32 object-cover" />
                        <p className="text-gray-700">How Plastic Pollution Affects Human Health</p>
                      </CardContent>
                    </Card>
                    <Card className="w-full px-2 mb-4">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-900">Article 3</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img src="1.jpg" alt="Article 3" className="mb-4 w-full h-32 object-cover" />
                        <p className="text-gray-700">The Economic Costs of Plastic Pollution</p>
                      </CardContent>
                    </Card>
                    
                    {/* Video section */}
                    <div className="w-full mb-6 col-span-full">
                      <h3 className="text-xl font-semibold text-gray-800">Videos</h3>
                      <p className="text-gray-600">Watch informative videos about plastic pollution and its solutions.</p>
                    </div>
                    <Card className="w-full px-2 mb-4">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-900">Video 1</CardTitle>
                      </CardHeader>
                      <CardContent>
                      <img src="/api/placeholder/640/360" alt="Video thumbnail" className="w-full h-48 object-cover rounded-md mb-4"/>
                        <p className="text-gray-700">The Journey of Plastic Waste</p>
                      </CardContent>
                    </Card>
                    <Card className="w-full px-2 mb-4">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-900">Video 2</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src="/api/placeholder/640/360" alt="Video thumbnail" className="w-full h-48 object-cover rounded-md mb-4"/>
                      <p className="text-gray-700">Innovative Solutions to Plastic Pollution</p>
                    </CardContent>
                  </Card>
                    <Card className="w-full px-2 mb-4">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-900">Video 3</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img src="/api/placeholder/640/360" alt="Video thumbnail" className="w-full h-48 object-cover rounded-md mb-4"/>
                        <p className="text-gray-700">The Journey of Plastic Waste</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          );
      case 'profile':
        return (
          <div className="p-4 flex justify-center">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex justify-center">Profile</h2>
                <div className="mt-4">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700">Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Email</label>
                      <input
                        type="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        placeholder="Your Email"
                      />
                    </div>
                    <div>
                    <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="New Password"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
        case 'workshops':
      return (
        <div className="p-4 flex justify-center">
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex justify-center">Upcoming Workshops</h2>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {/* Workshop section */}
                <div className="w-full mb-6 col-span-full">
                  <h3 className="text-xl font-semibold text-gray-800">Workshops</h3>
                  <p className="text-gray-600">View upcoming workshops on recycling and upcycling, and register online.</p>
                </div>
                <Card className="w-full px-2 mb-4">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">Workshop 1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Date: 2023-11-01</p>
                    <p className="text-gray-700">Topic: Recycling Basics</p>
                    <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Register</button>
                  </CardContent>
                </Card>
                <Card className="w-full px-2 mb-4">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">Workshop 2</CardTitle>
                  </CardHeader>
                  <CardContent>
                  <p className="text-gray-700">Date: 2023-11-15</p>
                    <p className="text-gray-700">Topic: Upcycling Projects</p>
                    <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Register</button>
                  </CardContent>
                </Card>
                <Card className="w-full px-2 mb-4">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">Workshop 3</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Date: 2023-12-01</p>
                    <p className="text-gray-700">Topic: Advanced Recycling Techniques</p>
                    <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Register</button>
                  </CardContent>
                </Card>
                {/* Calendar feature */}
                <div className="w-full mb-6 col-span-full">
                  <h3 className="text-xl font-semibold text-gray-800">Event Calendar</h3>
                  <p className="text-gray-600">Keep track of all upcoming events.</p>
                  <div className="mt-4">
                    {/* Calendar component can be integrated here */}
                    {/* <CalendarComponent /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      case 'forum':
      return (
        <div className="p-4 flex justify-center">
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex justify-center">Community Forum</h2>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {/* Forum section */}
                <div className="w-full mb-6 col-span-full">
                  <h3 className="text-xl font-semibold text-gray-800">Forum</h3>
                  <p className="text-gray-600">Share ideas, ask questions, and discuss sustainability practices.</p>
                </div>
                <Card className="w-full px-2 mb-4">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">Discussion 1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Topic: Best Practices for Recycling at Home</p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Join Discussion</button>
                  </CardContent>
                </Card>
                <Card className="w-full px-2 mb-4">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">Discussion 2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Topic: Innovative Upcycling Ideas</p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Join Discussion</button>
                  </CardContent>
                  </Card>
                <Card className="w-full px-2 mb-4">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">Discussion 3</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Topic: Reducing Plastic Waste in Daily Life</p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Join Discussion</button>
                  </CardContent>
                </Card>
                
                {/* Feedback section */}
                <div className="w-full mb-6 col-span-full">
                  <h3 className="text-xl font-semibold text-gray-800">Feedback</h3>
                  <p className="text-gray-600">Provide feedback on collection points, workshops, and overall app experience.</p>
                  <div className="mt-4">
                    {/* <FeedbackForm /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-950">Recycling App</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-900" />
              <div
                className="relative"
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
              >
                <User
                  className="w-6 h-6 text-gray-900 cursor-pointer"
                  onClick={() => setCurrentTab('profile')}
                />
                {isProfileHovered && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                    <div className="text-gray-900 font-medium">{user.name}</div>
                    <div className="text-gray-600">{user.rank}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="w-full bg-white shadow-md">
        <div className="p-4 flex justify-center space-x-4">
          <button
            onClick={() => setCurrentTab('dashboard')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              currentTab === 'dashboard' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentTab('resources')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              currentTab === 'resources' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Resources</span>
          </button>
          <button
            onClick={() => setCurrentTab('workshops')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              currentTab === 'workshops' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span>Workshops</span>
          </button>
          <button
            onClick={() => setCurrentTab('forum')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              currentTab === 'forum' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Community</span>
          </button>
        </div>
      </aside>

      {/* Content Area */}
      {renderContent()}
    </div>
  );
};

export default RecyclingApp;