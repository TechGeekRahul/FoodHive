import React from 'react'
import {  ChevronDown } from 'lucide-react';

const ControlButtons = () => {
  return (
    <div className="flex justify-between items-center mb">
    <div className="flex gap-2">
     
    </div>
    <button className="px-3 py-1.5 text-sm text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center gap-1">
      6 months <ChevronDown className="w-4 h-4" />
    </button>
  </div>
  )
}

export default ControlButtons