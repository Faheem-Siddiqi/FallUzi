import React from 'react'
import Weather from '../common/weather/weather'
export default function Tutorial() {
  return (
    <div className='bg-[#FAFAFA] h-screen  p-6'>
        <div className='flex justify-between mb-4'>
            <div className='flex gap-3'>
                <h1 className='text-primary font-bold text-4xl'>Tutorials</h1>
                <h1 className='text-[#C4C4C4] font-bold text-4xl'>Inspector</h1>

            </div>
            <Weather/>
        </div>
        <h1 className='text-2xl font-medium'> 
            Job Upload Tutorial
        </h1>
        <div className="flex flex-col px-11 pt-9 pb-20 mt-6 font-medium bg-white rounded-3xl shadow-md max-md:px-5">
      <div className="self-center text-lg text-slate-700 text-opacity-50 max-md:max-w-full">
        This tutorial includes guidelines and recommendations for completing the
        vehicle report forms that are to be filled out after an inspection is
        complete.
      </div>
      <div className="self-start mt-5 text-xl text-slate-700 max-md:max-w-full">
        Please take the time to be well versed in the guidelines and
        recommendations contained in each of our tutorials.
        <br />
        It is our desire to prov and resources available to our valued
        inspectors.
      </div>
    </div>

    </div>
  )
}
