import React from 'react'
export default function Tires() {
  return (
    <>
      <div className='my-5 xl:mr-5 p-5  bg-white rounded-xl '>
        <h2 className='text-2xl text-black font-semibold'>
          Tires
        </h2>
        <div className="flex gap-1 my-4">
          <p>Spare Tire</p>
          <label htmlFor='option1'>
            <input
              className='mx-1 rounded-none '
              type="checkbox"
              id='option1'
              name="option1"
              value="Yes"
            />
            Yes
          </label>
          <br />
          <label htmlFor='option2'>
            <input
              className='mx-1'
              id='option2'
              type="checkbox"
              name="option2"
              value="No"
            />
            No
          </label>
        </div>
        <div className="flex flex-col xl:flex-row gap-[3rem]  my-5 ">
          <div className='w-full xl:w-[50%] rounded-md border relative  my-3 px-4 py-6'>
            <div className="absolute left-9 -top-3 font-semibold  bg-white text-black">
              Drivers Front Tyre
            </div>
            <div className="flex flex-col px-5 py-2">
              <label className='font-semibold' htmlFor="manufacturer">Manufacturer</label>
              <input className='rounded-full p-2 my-2 shadow-md shadow-op border  border-stone-100' type="text" id="manufacturer" name="manufacturer" />
              <label className='font-semibold' htmlFor="size">Size</label>
              <input className='rounded-full p-2 my-2 shadow-md border  border-stone-100' type="text" id="size" name="size" />
              <label className='font-semibold' htmlFor="axleCount">Axle Count</label>
              <input className='rounded-full p-2 my-2 shadow-md border  border-stone-100' type="number" id="axleCount" name="axleCount" />
              <label className='font-semibold' htmlFor="tread">Tread</label>
              <input className='rounded-full p-2 my-2 shadow-md border  border-stone-100' type="text" id="tread" name="tread" />
            </div>
          </div>
          <div className='w-full xl:w-[50%] rounded-lg border relative my-3  px-4 py-6'>
            <div className="absolute left-9 -top-3 font-semibold  bg-white text-black">
              Passenger’s Front Tire
            </div>
            <div className="flex flex-col px-5 py-2">
              <label className='font-semibold' htmlFor="manufacturer">Manufacturer</label>
              <input className='rounded-full p-2 my-2 shadow-md border  border-stone-100' type="text" id="manufacturer" name="manufacturer" />
              <label className='font-semibold' htmlFor="size">Size</label>
              <input className='rounded-full p-2 my-2 shadow-md border  border-stone-100' type="text" id="size" name="size" />
              <label className='font-semibold' htmlFor="axleCount">Axle Count</label>
              <input className='rounded-full p-2 my-2 shadow-md border border-stone-100' type="number" id="axleCount" name="axleCount" />
              <label className='font-semibold' htmlFor="tread">Tread</label>
              <input className='rounded-full p-2 my-2 shadow-md border border-stone-100' type="text" id="tread" name="tread" />
            </div>
          </div>
        </div>
      </div>
      <div className=" my-5  p-5 bg-white  xl:mr-4 mr-0  rounded-xl ">
        <div className='flex  flex-col xl:flex-row justify-center gap-5 xl:justify-between'>
          <div className="flex justify-center w-full xl:w-[50%]">
            <p className='text-danger border py-3 px-5 rounded-l-xl w-fit '>
              Tire Condition
            </p>
            <select name="cars" id="cars" className='border-r border-t border-b p-3 rounded-r-xl outline-none w-96 xl:w-80'>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
            </select>
            <div>
            </div>
          </div>
          <div className="flex justify-center ">
            <p className='text-danger border py-3 px-5 rounded-l-xl  w-fit'>
              <span> Tire Condition</span>
            </p>
            <select name="Passengercars" id="Passengercars" className='border-r border-t border-b p-3 rounded-r-xl outline-none  w-96 xl:w-80 '>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
            </select>
            <div>
            </div>
          </div>
        </div>
        <div className='flex  flex-col xl:flex-row justify-center gap-5 xl:justify-between my-10'>
          <div className="flex justify-center w-full xl:w-[50%]">
            <p className='text-danger border p-3 rounded-l-xl w-fit '>
              Wheel Condition
            </p>
            <textarea name="Passengercars" id="Passengercars" className='border-r border-t border-b p-3 rounded-r-xl outline-none  w-96 xl:w-80 '>
            </textarea>
            <div>
            </div>
          </div>
          <div className="flex justify-center ">
            <p className='text-danger border p-3 rounded-l-xl  w-fit'>
              Wheel Condition
            </p>
            <textarea name="Passengercars" id="Passengercars" className='border-r border-t border-b p-3 rounded-r-xl outline-none  w-96 xl:w-80 '>
            </textarea>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-5  p-5 bg-white  xl:mr-4 mr-0  rounded-xl ">
        <div className="flex flex-col xl:flex-row gap-[3rem]  my-5 ">
          <div className='w-full xl:w-[50%] rounded-md border relative  my-3  px-4 py-6'>
            <div className="absolute left-9 -top-3 font-semibold  bg-white text-black">
              Drivers Rear Tyre
            </div>
            <div className="flex flex-col px-5 py-2">
              <label className='font-semibold' htmlFor="manufacturer">Manufacturer</label>
              <input className='rounded-full p-2 my-2 shadow-md border  border-stone-100' type="text" id="manufacturer" name="manufacturer" />
              <label className='font-semibold' htmlFor="size">Size</label>
              <input className='rounded-full p-2 my-2 shadow-md border  border-stone-100' type="text" id="size" name="size" />
              <label className='font-semibold' htmlFor="axleCount">Axle Count</label>
              <input className='rounded-full p-2 my-2 shadow-md border  border-stone-100' type="number" id="axleCount" name="axleCount" />
              <label className='font-semibold' htmlFor="tread">Tread</label>
              <input className='rounded-full p-2 my-2 shadow-md border  border-stone-100' type="text" id="tread" name="tread" />
            </div>
          </div>
          <div className='w-full xl:w-[50%] rounded-lg border relative my-3  px-4 py-6'>
            <div className="absolute left-9 -top-3 font-semibold  bg-white text-black">
              Passenger’s Rear Tire
            </div>
            <div className="flex flex-col px-5 py-2">
              <label className='font-semibold' htmlFor="manufacturer">Manufacturer</label>
              <input className='rounded-full p-2 my-2 shadow-md border  border-stone-100' type="text" id="manufacturer" name="manufacturer" />
              <label className='font-semibold' htmlFor="size">Size</label>
              <input className='rounded-full p-2 my-2 shadow-md border  border-stone-100' type="text" id="size" name="size" />
              <label className='font-semibold' htmlFor="axleCount">Axle Count</label>
              <input className='rounded-full p-2 my-2 shadow-md border border-stone-100' type="number" id="axleCount" name="axleCount" />
              <label className='font-semibold' htmlFor="tread">Tread</label>
              <input className='rounded-full p-2 my-2 shadow-md border border-stone-100' type="text" id="tread" name="tread" />
            </div>
          </div>
        </div>
      </div>
      <div className=" my-5  p-5 bg-white  xl:mr-4 mr-0  rounded-xl ">
        <div className='flex  flex-col xl:flex-row justify-center gap-5 xl:justify-between'>
          <div className="flex justify-center w-full xl:w-[50%]">
            <p className='text-danger border py-3 px-5 rounded-l-xl w-fit '>
              Tire Condition
            </p>
            <select name="cars" id="cars" className='border-r border-t border-b p-3 rounded-r-xl outline-none w-96 xl:w-80'>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
            </select>
            <div>
            </div>
          </div>
          <div className="flex justify-center ">
            <p className='text-danger border py-3 px-5 rounded-l-xl  w-fit'>
              <span> Tire Condition</span>
            </p>
            <select name="Passengercars" id="Passengercars" className='border-r border-t border-b p-3 rounded-r-xl outline-none  w-96 xl:w-80 '>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
              <option value="Select Condition">Select Condition</option>
            </select>
            <div>
            </div>
          </div>
        </div>
        <div className='flex  flex-col xl:flex-row justify-center gap-5 xl:justify-between my-10'>
          <div className="flex justify-center w-full xl:w-[50%]">
            <p className='text-danger border p-3 rounded-l-xl w-fit '>
              Wheel Conditions
            </p>
            <textarea name="Passengercars" id="Passengercars" className='border-r border-t border-b p-3 rounded-r-xl outline-none  w-96 xl:w-80 '>
            </textarea>
            <div>
            </div>
          </div>
          <div className="flex justify-center ">
            <p className='text-danger border p-3 rounded-l-xl  w-fit'>
              Wheel Condition
            </p>
            <textarea name="Passengercars" id="Passengercars" className='border-r border-t border-b p-3 rounded-r-xl outline-none  w-96 xl:w-80 '>
            </textarea>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
