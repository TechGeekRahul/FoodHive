import React from 'react';
import { ChevronLeft, Settings, Users, Grid, LineChart, GitBranch, Users2 } from 'lucide-react';

const LeftNavbar = () => {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-4">
    
      <div className="flex items-center mb-8">
        <ChevronLeft className="w-5 h-5 text-gray-500" />
        <span className="ml-2 text-lg font-semibold">Salesway</span>
      </div>

    
      <div className="space-y-2 mb-8">
        <button className="w-full flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
          <Settings className="w-5 h-5" />
          <span className="ml-3">Settings</span>
        </button>
        <button className="w-full flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
          <Users className="w-5 h-5" />
          <span className="ml-3">Team</span>
        </button>
      </div>

     
      <div className="mb-4">
        <p className="px-3 text-xs font-medium text-gray-500 uppercase">MENU</p>
      </div>


      <div className="space-y-2">
        <button className="w-full flex items-center px-3 py-2 bg-blue-50 text-blue-600 rounded-lg">
          <Grid className="w-5 h-5" />
          <span className="ml-3">Dashboard</span>
        </button>
        <button className="w-full flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
          <LineChart className="w-5 h-5" />
          <span className="ml-3">Campaigns</span>
        </button>
        <button className="w-full flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
          <GitBranch className="w-5 h-5" />
          <span className="ml-3">Flows</span>
        </button>
        <button className="w-full flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
          <Grid className="w-5 h-5" />
          <span className="ml-3">Integrations</span>
        </button>
        <button className="w-full flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
          <Users2 className="w-5 h-5" />
          <span className="ml-3">Customers</span>
        </button>
      </div>

     
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer mt-40">
          <img
            src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?semt=ais_hybrid"
            alt="User avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="ml-3 text-sm font-medium">Tom Wang</span>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;