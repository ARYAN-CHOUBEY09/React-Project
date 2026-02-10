import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { 
  LineChart, 
  Users, 
  MessageSquare, 
  Bell, 
  TrendingUp, 
  Clock, 
  User 
} from 'lucide-react';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 "
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back, Aryan! Here's what's happening today.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <select className="bg-surface border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="flex items-center">
          <div className="p-4 rounded-full bg-primary/10">
            <Users size={24} className="text-primary" />
          </div>
          <div className="ml-4">
            <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Active Users
            </div>
            <div className="text-2xl font-bold">1,246</div>
            <div className="text-xs flex items-center text-success">
              <TrendingUp size={14} className="mr-1" /> 
              <span>+12.5% from last week</span>
            </div>
          </div>
        </Card>

        <Card className="flex items-center">
          <div className="p-4 rounded-full bg-secondary/10">
            <MessageSquare size={24} className="text-secondary" />
          </div>
          <div className="ml-4">
            <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Conversations
            </div>
            <div className="text-2xl font-bold">328</div>
            <div className="text-xs flex items-center text-success">
              <TrendingUp size={14} className="mr-1" /> 
              <span>+5.3% from last week</span>
            </div>
          </div>
        </Card>

        <Card className="flex items-center">
          <div className="p-4 rounded-full bg-accent/10">
            <Bell size={24} className="text-accent" />
          </div>
          <div className="ml-4">
            <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              New Alerts
            </div>
            <div className="text-2xl font-bold">42</div>
            <div className="text-xs flex items-center text-error">
              <TrendingUp size={14} className="mr-1" style={{ transform: 'rotate(180deg)' }} /> 
              <span>-2.7% from last week</span>
            </div>
          </div>
        </Card>

        <Card className="flex items-center">
          <div className="p-4 rounded-full bg-success/10">
            <Clock size={24} className="text-success" />
          </div>
          <div className="ml-4">
            <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Avg. Response
            </div>
            <div className="text-2xl font-bold">1.8h</div>
            <div className="text-xs flex items-center text-success">
              <TrendingUp size={14} className="mr-1" /> 
              <span>+10.2% from last week</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Activity Overview</h3>
            <div className="flex space-x-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-xs ml-1">Conversations</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="text-xs ml-1">New Users</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center">
            <LineChart size={32} className="text-gray-400" />
            <span className="ml-2 text-gray-500">Activity chart visualization</span>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex pb-3 last:pb-0 last:border-0">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <User size={18} className="text-gray-600 dark:text-gray-400" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium">New user signed up</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {item * 10} minutes ago
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-center p-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors">
            View all activity
          </button>
        </Card>

        {/* AI Assistant Section */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">AI Assistant</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">Powered by GPT</span>
          </div>
          <div className="bg-muted p-4 rounded-lg h-48 overflow-y-auto space-y-2 text-sm text-gray-800 dark:text-gray-100">
            <div className="bg-background p-2 rounded shadow-sm border border-border w-max max-w-[80%]">
              👋 Hi Aryan! Need help with something today?
            </div>
            <div className="bg-primary text-white p-2 rounded shadow-sm w-max max-w-[80%] ml-auto">
              Show me a summary of last week's activity.
            </div>
            <div className="bg-background p-2 rounded shadow-sm border border-border w-max max-w-[80%]">
              Here’s your summary: 328 conversations, 42 alerts, 1.8h avg. response.
            </div>
          </div>
           <div className="mt-4 flex items-center space-x-2">
    <input
      type="text"
      placeholder="Ask a Anything..."
      className=" mt-4 flex-1 px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
    />
    <button className=" mt-5 bg-primary text-white px-4 py-2 text-sm rounded-lg hover:bg-primary/90 transition-colors">
      Send
    </button>
  </div>
          <button className="mt-8 w-full text-center p-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors">
            Open Chat Assistant
          </button>
        </Card>
      </div>
    </motion.div>
  );
};

export default Dashboard;
