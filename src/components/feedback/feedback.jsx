import React, { useState } from 'react'

export default function Feedback() {
    const [selectedNumber, setSelectedNumber] = useState(null);

  const handleSelectNumber = (number) => {
    setSelectedNumber(number);
  };
  return (
    <div className='bg-[#FAFAFA]'>
        <div className='flex justify-between'>
            <h1 className='text-primary font-bold text-4xl'>FeedBack</h1>
            <div className='bg-white text-primary items-center p-2 px-5 flex gap-3 justify-evenly rounded-full shadow '>

                <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 8.00012C27.9969 5.76096 26.3506 3.86344 24.1343 3.54454C23.334 1.40502 21.2853 -0.00921516 19.001 0.00103188C17.0231 0.0120783 15.2021 1.0806 14.2279 2.80203C10.8173 1.00917 6.59914 2.32064 4.80627 5.73116C4.41971 6.46655 4.16761 7.26502 4.0618 8.089C1.34975 8.60738 -0.428515 11.2261 0.0897966 13.9381C0.540376 16.2955 2.6025 18.0001 5.00256 17.999H18.0011C21.1363 17.9942 23.7397 15.5775 23.9775 12.4514C26.2585 12.2128 27.993 10.2935 28 8.00012ZM18.0012 15.9992H5.00263C3.34596 15.9992 2.00294 14.6562 2.00294 12.9995C2.00294 11.3428 3.34596 9.99989 5.00263 9.99989C5.66055 9.99727 6.30023 10.2156 6.81934 10.6198C7.2556 10.9585 7.88379 10.8794 8.22246 10.4431C8.56112 10.0069 8.48205 9.37867 8.04578 9.04001C7.46933 8.59626 6.80124 8.28652 6.09013 8.1334C6.56498 5.41706 9.15196 3.59999 11.8683 4.07485C14.2604 4.49301 16.0048 6.57164 16.0014 8.99997C16.0014 9.55222 16.4491 9.99989 17.0013 9.99989C17.5536 9.99989 18.0013 9.55222 18.0013 8.99997C17.9994 8.66697 17.9741 8.33456 17.9255 8.0052C20.1328 7.96385 21.9557 9.71973 21.997 11.9271C22.0384 14.1343 20.2825 15.9572 18.0752 15.9985C18.0505 15.999 18.0258 15.9992 18.0012 15.9992ZM23.814 10.4798C23.046 7.60797 20.3027 5.72186 17.3462 6.0329C16.9679 5.26394 16.4638 4.56351 15.8549 3.96053C16.7029 2.22638 18.7962 1.508 20.5304 2.35603C21.4828 2.8218 22.1723 3.69462 22.405 4.72891C22.5073 5.18545 22.9126 5.51001 23.3805 5.51016C23.4208 5.51256 23.4612 5.50921 23.5005 5.50013C24.8811 5.50129 25.9992 6.62142 25.9982 8.00193C25.9971 9.2597 25.0617 10.3208 23.814 10.4795V10.4798Z" fill="#1970F1"/>
                </svg>

                <div className="text-2xl font-bold">
                    21&deg;
                </div>

                <div className="text-base font-bold">
                    Medan, IDN
                </div>

                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.999999L7 7L13 1" stroke="#868686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>



            </div>
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
          className={`flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 mx-1 cursor-pointer ${
            selectedNumber === number + 1 ? 'bg-primary text-white' : ''
          }`}
          onClick={() => handleSelectNumber(number + 1)}
        >
          {number + 1}
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
      <div className="justify-center px-8 py-2 text-base text-white whitespace-nowrap bg-primary rounded-[100px] max-md:px-5">
        Send
      </div>
    </div>

        </div>

        </div>
        
    </div>
  )
}
