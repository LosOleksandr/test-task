import React from "react"


const SkeletonWrapper = () => {
  return (
    <div className="">
      <ul className="grid grid-cols-4 gap-4 pt-24">
        <li className="w-[296px] h-[444px] bg-gray-300"></li>
        <li className="w-[296px] h-[444px] bg-gray-300"></li>
        <li className="w-[296px] h-[444px] bg-gray-300"></li>
        <li className="w-[296px] h-[444px] bg-gray-300"></li>
        <li className="w-[296px] h-[444px] bg-gray-300"></li>
        <li className="w-[296px] h-[444px] bg-gray-300"></li>
        <li className="w-[296px] h-[444px] bg-gray-300"></li>
        <li className="w-[296px] h-[444px] bg-gray-300"></li>
      </ul>
    </div>
  )
}

export default SkeletonWrapper
