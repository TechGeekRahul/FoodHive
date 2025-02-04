import React from 'react';

const CommunityFeedback = ({ feedbackData }) => {

  if (!feedbackData) return null;

  const { negative, neutral, positive, rating } = feedbackData;
  const total = negative + neutral + positive;


  const negativeWidth = (negative / total) * 100;
  const neutralWidth = (neutral / total) * 100;
  const positiveWidth = (positive / total) * 100;


  const getFeedbackStatus = () => {
    if (positive > neutral && positive > negative) return "Mostly positive";
    if (negative > neutral && negative > positive) return "Mostly negative";
    return "Mixed";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
      <div className="space-y-2">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Community feedback</h2>
          <span className="text-2xl">{rating}</span>
        </div>
        <h3 className="text-gray-600 mb-4">{getFeedbackStatus()}</h3>
        
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex-grow h-2 rounded-full overflow-hidden flex">
            <div 
              className="bg-red-400" 
              style={{ width: `${negativeWidth}%` }}
            />
            <div 
              className="bg-yellow-400" 
              style={{ width: `${neutralWidth}%` }}
            />
            <div 
              className="bg-green-400" 
              style={{ width: `${positiveWidth}%` }}
            />
          </div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-600">
          <span>Negative</span>
          <span>Neutral</span>
          <span>Positive</span>
        </div>
        
        <div className="flex justify-between text-sm font-medium">
          <span>{negative}</span>
          <span>{neutral}</span>
          <span>{positive}</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedback;