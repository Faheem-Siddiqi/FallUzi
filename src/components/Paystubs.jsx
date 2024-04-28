import React from 'react'
import Header from './Header';
export default function Paystubs() {
    return (
        <>
            <Header />
            <div className="px-10 my-5">
                <div className=" flex justify-between items-center  flex-col xl:flex-row">
                    <div className="flex w-full items-center gap-5 flex-col xl:flex-row my-10">
                        <div>
                            <span className='text-primary text-2xl font-bold tracking-wide'>
                                PayStubs
                            </span>
                            <span className='text-stone-400 text-2xl font-bold tracking-wide mx-4'>
                                Inspector
                            </span>
                        </div>
                        <button className='bg-primary rounded-lg text-white font-bold p-4 w-full xl:w-fit hover:bg-primaryHover duration-300'>W9 Form</button>
                        <button className='bg-primary rounded-lg text-white font-bold p-4 w-full xl:w-fit  hover:bg-primaryHover duration-300 '>ePayment Form</button>
                    </div>
                    <div className='flex items-center rounded-full border bg-white px-4  py-5 w-fit justify-center xl:py-3'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_13656)">
                                <path d="M28 13.0001C27.9969 10.761 26.3506 8.86344 24.1343 8.54454C23.334 6.40502 21.2853 4.99078 19.001 5.00103C17.0231 5.01208 15.2021 6.0806 14.2279 7.80203C10.8173 6.00917 6.59914 7.32064 4.80627 10.7312C4.41971 11.4665 4.16761 12.265 4.0618 13.089C1.34975 13.6074 -0.428515 16.2261 0.0897966 18.9381C0.540376 21.2955 2.6025 23.0001 5.00256 22.999H18.0011C21.1363 22.9942 23.7397 20.5775 23.9775 17.4514C26.2585 17.2128 27.993 15.2935 28 13.0001ZM18.0012 20.9992H5.00263C3.34596 20.9992 2.00294 19.6562 2.00294 17.9995C2.00294 16.3428 3.34596 14.9999 5.00263 14.9999C5.66055 14.9973 6.30023 15.2156 6.81934 15.6198C7.2556 15.9585 7.88379 15.8794 8.22246 15.4431C8.56112 15.0069 8.48205 14.3787 8.04578 14.04C7.46933 13.5963 6.80124 13.2865 6.09013 13.1334C6.56498 10.4171 9.15196 8.59999 11.8683 9.07485C14.2604 9.49301 16.0048 11.5716 16.0014 14C16.0014 14.5522 16.4491 14.9999 17.0013 14.9999C17.5536 14.9999 18.0013 14.5522 18.0013 14C17.9994 13.667 17.9741 13.3346 17.9255 13.0052C20.1328 12.9639 21.9557 14.7197 21.997 16.9271C22.0384 19.1343 20.2825 20.9572 18.0752 20.9985C18.0505 20.999 18.0258 20.9992 18.0012 20.9992ZM23.814 15.4798C23.046 12.608 20.3027 10.7219 17.3462 11.0329C16.9679 10.2639 16.4638 9.56351 15.8549 8.96053C16.7029 7.22638 18.7962 6.508 20.5304 7.35603C21.4828 7.8218 22.1723 8.69462 22.405 9.72891C22.5073 10.1855 22.9126 10.51 23.3805 10.5102C23.4208 10.5126 23.4612 10.5092 23.5005 10.5001C24.8811 10.5013 25.9992 11.6214 25.9982 13.0019C25.9971 14.2597 25.0617 15.3208 23.814 15.4795V15.4798Z" fill="#1970F1" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_13656">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='font-bold ml-2 text-primary'>21 <span className='absolute text-xl font-extrabold'>{"°"}</span></p>
                        <select className='outline-0 text-primary font-bold ml-2' name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                <div className='my-5'>
                    <span className='font-semibold text-lg '>
                        PayCheck:
                    </span>
                    <span className='mx-2 font-semibold text-stone-400 text-lg'>
                        Mar1-15,2024
                    </span>
                </div>
                <div className='flex justify-end'>
                    <button className='bg-primary rounded-lg text-white font-bold p-4 w-full xl:w-fit hover:bg-primaryHover duration-300 '>Previously PayStus</button>
                </div>
                <div className='overflow-x-auto my-5'>
                    <table className=' overflow-x-auto w-full text-center my-5'>
                        <thead>
                            <tr className='border-b border-stone-600 border-opacity-40  '>
                                <th className='font-bold p-4 '>Order#</th>
                                <th className='font-bold p-4'>Amount</th>
                                <th className='font-bold p-4'>Memo</th>
                                <th className='font-bold p-4'>Date</th>
                                <th className='font-bold p-4'>Paid</th>
                                <th className='font-bold p-4'>Check No </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b border-stone-400 '>
                                <td className='text-stone-400 p-5'>66733</td>
                                <td className='font-semibold text-green-500 p-5'>70$</td>
                                <td className='text-stone-600 p-5'>	Shaumburg II
                                </td>
                                <td>3/15</td>
                                <td className='font-bold p-5'>3/15</td>
                                <td className='font-bold p-5'></td>
                            </tr>
                            <tr className='border-b border-stone-400 '>
                                <td className='text-stone-400 p-5'>66733</td>
                                <td className='font-semibold text-green-500 p-5'>70$</td>
                                <td className='text-stone-600 p-5'>	Shaumburg II
                                </td>
                                <td>3/15</td>
                                <td className='font-bold p-5'>3/15</td>
                                <td className='font-bold p-5'></td>
                            </tr>
                            <tr className='border-b border-stone-400 '>
                                <td className='font-semibold p-5'>66733</td>
                                <td className='font-semibold text-green-500 p-5'>70$</td>
                                <td className='text-stone-600 p-5'>	Shaumburg II
                                </td>
                                <td>3/15</td>
                                <td className='font-bold p-5'>3/15</td>
                                <td className='font-bold p-5'></td>
                            </tr>
                            <tr className='border-b border-stone-400 '>
                                <td className='text-stone-400 p-5'>66733</td>
                                <td className='font-semibold text-green-500 p-5'>70$</td>
                                <td className='text-stone-600 p-5'>	Shaumburg II
                                </td>
                                <td>3/15</td>
                                <td className='font-bold p-5'>3/15</td>
                                <td className='font-bold p-5'></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div></>
    )
}
