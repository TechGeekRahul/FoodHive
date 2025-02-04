import { useState} from 'react';
import { supabase } from '../createClient';
import CommunityFeedback from './CommunityFeedback';
import Customers from './Customers';
import TopProducts from './TopProducts'
import Metrics from './Metrics'
import LeftNavbar from './LeftNavBar';

import Comparison from './Comparison'

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const [comparisonData, setComparisonData] = useState([]);
  const [deviceData, setDeviceData] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [performanceScore, setPerformanceScore] = useState(null);
  const [feedbackData, setFeedbackData] = useState(null);
  const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginCredentials.username === 'trial' && loginCredentials.password === 'assignment123') {
      setIsLoggedIn(true);
      fetchAllData();
    }
  };

  

const fetchAllData = async () => {
    try {
      const headers = { 'Authorization': 'Basic ' + btoa('trial:assignment123') };
      
      const [metricsRes, scoreRes, feedbackRes] = await Promise.all([
        fetch('http://3.111.196.92:8020/api/v1/sample_assignment_api_1/', { headers }),
        fetch('http://3.111.196.92:8020/api/v1/sample_assignment_api_3/', { headers }),
    
        fetch('http://3.111.196.92:8020/api/v1/sample_assignment_api_5/', { headers })
      ]);
  
      setMetrics(await metricsRes.json());
      setPerformanceScore(await scoreRes.json());
      setFeedbackData(await feedbackRes.json());
      const [comparisonRes, topProductsRes, customersRes] = await Promise.all([
        supabase.from("comparison").select("*"),
        supabase.from("topproducts").select("*"),
        supabase.from("customersbydevice").select("*")
      ]);
      setComparisonData(comparisonRes.data);
        setTopProducts(topProductsRes.data);
        setDeviceData(customersRes.data);      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  


  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={loginCredentials.username}
                onChange={(e) => setLoginCredentials(prev => ({...prev, username: e.target.value}))}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={loginCredentials.password}
                onChange={(e) => setLoginCredentials(prev => ({...prev, password: e.target.value}))}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <LeftNavbar />
      <div className="flex-1 "> 
        <div className="p-6 bg-gray-50 min-h-screen">
          <div className="grid grid-cols-12 gap-6">
          
            <div className="col-span-12 lg:col-span-9">
              <Metrics metrics={metrics}/>
              <Comparison comparisonData={comparisonData}/>
              <TopProducts topProducts={topProducts} />
            </div>

            <div className="col-span-12 lg:col-span-3 space-y-6">
              {performanceScore && (
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-8 border-blue-500">
                      <span className="text-2xl font-bold">{performanceScore.score}</span>
                    </div>
                    <h3 className="mt-4 font-bold">You're good!</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Your sales performance score is better than 80% other users
                    </p>
                  </div>
                </div>
              )}

              <Customers deviceData={deviceData} />
              <CommunityFeedback feedbackData={feedbackData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;