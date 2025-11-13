import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderCard = () => {
  return (
    <div className="w-[420px] bg-[#262626] rounded-lg p-5 mb-4 shadow-lg cursor-pointer hover:bg-[#2c2c2c]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#f6b100] text-black font-bold text-lg rounded-md w-10 h-10 flex items-center justify-center">
            AM
          </div>
          <div>
            <h1 className="text-[#f5f5f5] text-lg font-semibold">Amrit Raj</h1>
            <p className="text-[#9e9e9e] text-sm">#101 | Dine in</p>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-green-500 bg-[#233a2f] px-2 py-1 rounded-md text-sm flex items-center gap-1">
            <FaCheckDouble /> Ready
          </p>
          <p className="text-[#9e9e9e] text-xs flex items-center gap-1 mt-1">
            <FaCircle className="text-green-500 text-[8px]" /> Ready to serve
          </p>
        </div>
      </div>

      {/* Middle */}
      <div className="flex justify-between items-center text-[#9e9e9e] text-sm mt-4">
        <p>January 18, 2025 08:32 PM</p>
        <p>8 Items</p>
      </div>

      <hr className="border-t border-[#3a3a3a] my-3" />

      {/* Footer */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#f5f5f5] text-base font-semibold">Total</h1>
        <p className="text-[#f5f5f5] text-base font-semibold">₹250.00</p>
      </div>
    </div>
  )
}

export default OrderCard
