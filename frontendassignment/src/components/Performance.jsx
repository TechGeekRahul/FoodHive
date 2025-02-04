import React from 'react'

const Performance = ({performanceScore}) => {
  return (
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
  )
}

export default Performance;