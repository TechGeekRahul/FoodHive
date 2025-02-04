import React from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react';
import ControlButtons from './ControlButtons';
import {  ChevronDown } from 'lucide-react';

const Metrics = ({metrics}) => {
  return (
    <div className="mb-6 ">
      <div className='flex justify-between'>
      <h1 className='text-4xl font-bold text-Black-100'>Dashboard</h1>
      <button className="px-3 py-1.5 text-sm text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center gap-1">
      Last Year <ChevronDown className="w-4 h-4" />
    </button>
    </div>
    <div className="grid grid-cols-3 gap-4">
    <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {metrics && (
              <>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Purchases</p>
                      <h3 className="text-2xl font-bold">{metrics.purchases}</h3>
                    </div>
                    <div className="text-green-500 flex items-center">
                      <ArrowUp className="h-4 w-4" />
                      <span className="text-sm">+32%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Revenue</p>
                      <h3 className="text-2xl font-bold">${metrics.revenue}</h3>
                    </div>
                    <div className="text-green-500 flex items-center">
                      <ArrowUp className="h-4 w-4" />
                      <span className="text-sm">+49%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Refunds</p>
                      <h3 className="text-2xl font-bold">${metrics.refunds}</h3>
                    </div>
                    <div className="text-red-500 flex items-center">
                      <ArrowDown className="h-4 w-4" />
                      <span className="text-sm">-7%</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        
        </div>
        </div>
        
        </div>


  )
}

export default Metrics