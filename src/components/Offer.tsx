import React from 'react'

const Offer = () => {
  return (
    <div className='py-24 grid place-items-center'>
      <h2 className='text-2xl mb-6'>What we offer?</h2>
      <ul className='max-w-5xl grid grid-cols-2 gap-6 bg-slate-100 dark:bg-slate-600 p-10 rounded-2xl'>
        <li>
          <span className='text-blue-500 font-semibold'>Wide Range of Vehicles:</span> Discover our extensive fleet of vehicles, from
          compact cars to spacious SUVs, ensuring you find the perfect ride for
          your journey.
        </li>
        <li>
          <span className='text-blue-500 font-semibold'>Flexible Rental Options:</span> Choose from daily, weekly, or monthly rental
          plans, and enjoy the flexibility to match your schedule and budget.
        </li>
        <li>
          <span className='text-blue-500 font-semibold'>Competitive Pricing:</span> We offer affordable rates and competitive prices,
          with no hidden fees, so you can enjoy your trip without breaking the
          bank.
        </li>
        <li>
          <span className='text-blue-500 font-semibold'>Easy Booking Process:</span> Our user-friendly online booking system allows
          you to reserve your vehicle in just a few clicks, saving you time and
          effort.
        </li>
      </ul>
    </div>
  )
}

export default Offer