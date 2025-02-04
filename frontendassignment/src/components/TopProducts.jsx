import React from 'react'

const TopProducts = ({topProducts}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Top Products</h2>
      <button className="px-3 py-1.5 text-sm text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
        Full results
      </button>
    </div>
    <div className="bg-white p-6 ">
          
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Product</th>
                    <th className="text-left p-4 font-semibold">Sold amount</th>
                    <th className="text-left p-4 font-semibold">Unit price</th>
                    <th className="text-left p-4 font-semibold">Revenue</th>
                    <th className="text-left p-4 font-semibold">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4">{product.Product}</td>
                      <td className="p-4">{product.sold_amount}</td>
                      <td className="p-4">${product.unit_price}</td>
                      <td className="p-4">${product.revenue}</td>
                      <td className="p-4">⭐ {product.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>
  )
}

export default TopProducts