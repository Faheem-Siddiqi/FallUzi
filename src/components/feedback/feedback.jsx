import React, { useState } from 'react'
import Weather from '../common/weather/weather';
export default function Feedback() {
    const [selectedNumber, setSelectedNumber] = useState(null);

  const handleSelectNumber = (number) => {
    setSelectedNumber(number);
  };
  return (
    <div className='bg-[#FAFAFA] h-screen'>
        <div className='flex justify-between p-6'>
            <h1 className='text-primary font-bold text-4xl'>FeedBack</h1>
            <Weather/>
        </div>

        <div className='flex justify-center'>
        <div className='flex border bg-white flex-col mt-6 px-8 rounded-lg shadow-md'>
            {/*Heading*/}
            <div className='flex flex-col justify-center items-center  mt-6 mb-6'>
                <p className='text-2xl font-bold'>How likely are you to recommend </p>
                <p className='text-2xl font-bold'>Our Car Inspection To Your Colleagues?</p>
            </div>
            {/*Rating*/}
            <div className="flex justify-center">
      {[...Array(10).keys()].map((number) => (
        <div
          key={number + 1}
          className={`flex items-center justify-center w-12 h-12  rounded-full border font-medium  mx-1 cursor-pointer ${
            selectedNumber === number + 1 ? 'bg-white border-primary  ' : 'bg-[#F2F2F2] border-gray-400'
         }`}
            
        
          onClick={() => handleSelectNumber(number + 1)}
        >
            <div
            className={`flex items-center justify-center w-11 h-11 rounded-full border font-bold cursor-pointer ${
                selectedNumber === number + 1 ? 'bg-primary text-white  ' : ''
             }`}
            > 
            

            {number + 1}
            </div>
          
          
          
        </div>
      ))}
    </div>
            {/*Subheadings*/}
            <div className='flex mt-2 text-sm px-3 justify-between text-primary'>
                <p>Not Likely</p>
                <p>Extremely Like</p>
            </div>
            {/*Review*/}
            <div className="flex my-6 gap-5 py-2 pr-2 pl-6 bg-white shadow max-w-[805px] rounded-[100px] max-md:flex-wrap max-md:pl-5">
      <div className="flex-auto align-middle my-auto text-base text-black text-opacity-50">
        <input
          type="text"
          placeholder="Tell us something at keeps you coming back"
          className="w-full p-0 border-0 outline-0 text-base text-black"
          />
        
      </div>
      <div className="justify-center px-8 py-2 text-base text-white whitespace-nowrap bg-primary rounded-[100px] max-md:px-5 cursor-pointer">
        Send
      </div>
    </div>

        </div>

        </div>
        
    </div>
  )
}
