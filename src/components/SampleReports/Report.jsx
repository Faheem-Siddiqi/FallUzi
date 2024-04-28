import React from "react";
import Header from "../Header";
import Car from "../../assets/images/car.png"
import './Report.css'; // Import your CSS file for styling
function DownloadButton() {
  return (
    <div className="flex gap-2 px-4 py-4 text-base font-semibold text-white bg-blue-600 rounded-xl max-md:flex-wrap">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/28be55babeddb1b2ef295252a56e1cd7d17db1d2d3a770626e0881ace5257463?apiKey=58b353e16f7149db9729650bdfef6357&" alt="Download icon" className="shrink-0 aspect-[1.35] w-[25px]" />
      <div className="flex-auto">Download Full Size Pictures (PDF)</div>
    </div>
  );
}


export default function Report() {
  return (
    <>
    <Header/>
    <div className="flex bg-[#FAFAFA] pt-5 flex-col px-12">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/27b94c4c22277a1dfc4562c4c5f2dd16687865ef749ead914aaab793914ec661?apiKey=58b353e16f7149db9729650bdfef6357&" alt="Standard report" className="max-w-full aspect-[3.45] w-[330px]" />
      <div className="flex gap-5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
        <h1 className="flex-auto self-start text-3xl font-medium text-black text-opacity-50 max-md:max-w-full">
          SAMPLE STANDARD REPORT
        </h1>
        <DownloadButton />
      </div>
      
      <div className="vehicle-summary">
      <div className="image mt-11">
        <img src={Car} alt="Vehicle exterior" />
      </div>
      <div className="text">
        <h1 className="text-3xl font-bold">2018 TOYOTA CAMRY</h1>
        <h2 className="mt-11 mb-4 text-2xl font-semibold">SUMMARY:</h2>
        <p className="text-lg">
            I start this inspection off with the exterior of the vehicle. The front cover has been resprayed, signs of impact on left front of cover, there are chips and scratches flaking off the right side of the cover. The head lights and grill both have chips and the right headlight has a crack in it. The hood has a ding, an outward protrus and touch up paint. The windshield has two chips. The right front fender has chips, and a dent. The right door has a dent, three dings, scratches, and chips. The quarter has a crease in the body near the fuel door, scratches, and a ding above the passenger door window. The rear cover has scratches, chips, touch respray. The trunk and tail lights have scratches. The roof has scratches. The left rear quarter has scratches. The left door has scratches, one ding, chips on mirro scratches along window.         Moving on, I find myself in the interior of the vehicle. I immediately notice signs of cigarette use. There is ash evidence in the ash tray, along the window leading edge, and behind the rear seats once folded down. The driver seat shows signs of wear on the upper bolster. There are scratches along the center console fron select button is missing its top trim. The ash tray doesn't stay open. The cargo nets behind both front seats are torn. The sun visor retainer clips are brok volume knob is not consistent with controlling the volume level. The driver window makes a screeching noise while operating. There are tosee scratches on aa both fron window tint. I scanned the on board computer for trouble codes and foundMoving on, I find myself in the interior of the vehicle. toIimmediately notice signs of cigarette use. There is ash evidence in the ash tray, along the window leading edge, and behind the rear seats once folded down.
            </p>
      </div>
    </div>
      <hr className="mt-10 w-full bg-black border border-black border-solid min-h-[1px] max-md:max-w-full" />
    </div>



    <div className="grid px-12 bg-[#FAFAFA] grid-cols-2 gap-20 p-6" >
        {/* Left  Column  */}
        <div className="flex flex-col gap-14">
            <div>
                <div className="bg-blue-600 text-white p-2 px-4">
                    <h2>VEHICLE INFO</h2>
                </div>
                <div className="flex bg-white w-full ">
                    <div className="border-r-2 w-1/2 p-2 uppercase">Make</div>
                    <div className="w-1/2 p-2 px-6">Toyota</div>
                </div>
                <div className="flex bg-[#EFEFEF]  w-full ">
                    <div className="border-r-2 w-1/2 p-2 uppercase">Model</div>
                    <div className=" w-1/2 p-2 px-6">Camry</div>
                </div>
            
                <div className="flex bg-white w-full ">
                    <div className="border-r-2 w-1/2 p-2 uppercase">Variant</div>
                    <div className="w-1/2 p-2 px-6">Camry</div>
                </div>
                <div className="flex bg-[#EFEFEF]   w-full ">
                    <div className="border-r-2 w-1/2 p-2 uppercase">Milage</div>
                    <div className=" w-1/2 p-2 px-6">25km</div>
                </div>
                
                <div className="flex bg-white w-full ">
                    <div className="border-r-2 w-1/2 p-2">TRANSMISSION</div>
                    <div className="w-1/2 p-2 px-6">78787878</div>
                </div>
                <div className="flex bg-[#EFEFEF]  w-full ">
                    <div className="border-r-2 w-1/2 p-2">INTERIOR COLOR</div>
                    <div className=" w-1/2 p-2 px-6">Off White</div>
                </div>
                
                <div className="flex bg-white w-full ">
                    <div className="border-r-2 w-1/2 p-2">EXTERIOR COLOR</div>
                    <div className="w-1/2 p-2 px-6">White</div>
                </div>
                <div className="flex bg-[#EFEFEF]   w-full ">
                    <div className="border-r-2 w-1/2 p-2">DRIVE TYPE</div>
                    <div className=" w-1/2 p-2 px-6">All Wheel</div>
                </div>
                
                <div className="flex bg-white w-full ">
                    <div className="border-r-2 w-1/2 p-2">FUEL TYPE</div>
                    <div className="w-1/2 p-2 px-6">Petrol</div>
                </div>
                <div className="flex bg-[#EFEFEF]  w-full ">
                    <div className="border-r-2 w-1/2 p-2">ENGINE</div>
                    <div className=" w-1/2 p-2 px-6">6 Cylinder</div>
                </div>
                <div className="flex bg-white w-full ">
                    <div className="border-r-2 w-1/2 p-2">BODY COLOR</div>
                    <div className=" w-1/2 p-2 px-6">Black</div>
                </div>
            </div>
            <div>
                <div className="bg-blue-600 text-white p-2 px-4">
                    <h2>EXTERIOR</h2>
                </div>
                <div className="flex justify-between bg-white w-full ">
                    <div className="  p-2 uppercase">Make</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className="p-2 uppercase">Model</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
            
                <div className="flex justify-between bg-white w-full ">
                    <div className="p-2 uppercase">Variant</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]   w-full ">
                    <div className="p-2 uppercase">Milage</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                
                <div className="flex flex-col bg-white w-full ">
                    <div className="flex justify-between">
                        <div className=" p-2">TRANSMISSION</div>
                        <div className=" p-2 px-6">
                        <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8416 1.71947C13.8181 1.68102 13.7858 1.64872 13.7474 1.62526C13.6138 1.54376 13.4395 1.58595 13.358 1.71947L1.657 20.8911C1.62987 20.9356 1.61552 20.9867 1.61553 21.0387C1.61553 21.1952 1.74236 21.322 1.89879 21.322H25.3008C25.3529 21.322 25.4039 21.3076 25.4484 21.2805C25.5819 21.199 25.6241 21.0247 25.5426 20.8912L13.8416 1.7195L13.8416 1.71947ZM15.0505 0.98162L26.7515 20.1533C27.2405 20.9545 26.9874 22.0004 26.1862 22.4894C25.9195 22.6521 25.6132 22.7382 25.3008 22.7382H1.89876C0.960141 22.7382 0.199219 21.9773 0.199219 21.0387C0.199225 20.7263 0.285326 20.42 0.448065 20.1533L12.1491 0.98162C12.6381 0.180423 13.684 -0.0726555 14.4852 0.416323C14.7159 0.557124 14.9097 0.750918 15.0505 0.98162ZM13.5998 18.716C14.2255 18.716 14.7328 18.2087 14.7328 17.583C14.7328 16.9572 14.2255 16.4499 13.5998 16.4499C12.974 16.4499 12.4667 16.9572 12.4667 17.583C12.4667 18.2087 12.974 18.716 13.5998 18.716ZM13.5998 6.53592C12.974 6.53592 12.4667 7.04319 12.4667 7.66895V13.9006C12.4667 14.5264 12.974 15.0336 13.5998 15.0336C14.2255 15.0336 14.7328 14.5264 14.7328 13.9006V7.66895C14.7328 7.04319 14.2255 6.53592 13.5998 6.53592Z" fill="#FF0000"/>
                        </svg>

                        </div>
                    </div>
                    
                    
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className=" p-2">INTERIOR COLOR</div>
                    <div className="  p-2 px-6">
                    <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8416 1.71947C13.8181 1.68102 13.7858 1.64872 13.7474 1.62526C13.6138 1.54376 13.4395 1.58595 13.358 1.71947L1.657 20.8911C1.62987 20.9356 1.61552 20.9867 1.61553 21.0387C1.61553 21.1952 1.74236 21.322 1.89879 21.322H25.3008C25.3529 21.322 25.4039 21.3076 25.4484 21.2805C25.5819 21.199 25.6241 21.0247 25.5426 20.8912L13.8416 1.7195L13.8416 1.71947ZM15.0505 0.98162L26.7515 20.1533C27.2405 20.9545 26.9874 22.0004 26.1862 22.4894C25.9195 22.6521 25.6132 22.7382 25.3008 22.7382H1.89876C0.960141 22.7382 0.199219 21.9773 0.199219 21.0387C0.199225 20.7263 0.285326 20.42 0.448065 20.1533L12.1491 0.98162C12.6381 0.180423 13.684 -0.0726555 14.4852 0.416323C14.7159 0.557124 14.9097 0.750918 15.0505 0.98162ZM13.5998 18.716C14.2255 18.716 14.7328 18.2087 14.7328 17.583C14.7328 16.9572 14.2255 16.4499 13.5998 16.4499C12.974 16.4499 12.4667 16.9572 12.4667 17.583C12.4667 18.2087 12.974 18.716 13.5998 18.716ZM13.5998 6.53592C12.974 6.53592 12.4667 7.04319 12.4667 7.66895V13.9006C12.4667 14.5264 12.974 15.0336 13.5998 15.0336C14.2255 15.0336 14.7328 14.5264 14.7328 13.9006V7.66895C14.7328 7.04319 14.2255 6.53592 13.5998 6.53592Z" fill="#FF0000"/>
                        </svg>
                    </div>
                </div>
                
                <div className="flex justify-between bg-white w-full ">
                    <div className=" p-2">EXTERIOR COLOR</div>
                    <div className="p-2 px-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]   w-full ">
                    <div className=" p-2">DRIVE TYPE</div>
                    <div className=" p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                
                
            </div>
            <div>
                <div className="bg-blue-600 text-white p-2 px-4">
                    <h2>MANUFACTURE</h2>
                </div>
                <div className="flex justify-between bg-white w-full ">
                    <div className="  p-2 uppercase">Make</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className="p-2 uppercase">Model</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
            
                <div className="flex justify-between bg-white w-full ">
                    <div className="p-2 uppercase">Variant</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]   w-full ">
                    <div className="p-2 uppercase">Milage</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                
                <div className="flex flex-col bg-white w-full ">
                    <div className="flex justify-between">
                        <div className=" p-2">TRANSMISSION</div>
                        <div className=" p-2 px-6">
                        <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8416 1.71947C13.8181 1.68102 13.7858 1.64872 13.7474 1.62526C13.6138 1.54376 13.4395 1.58595 13.358 1.71947L1.657 20.8911C1.62987 20.9356 1.61552 20.9867 1.61553 21.0387C1.61553 21.1952 1.74236 21.322 1.89879 21.322H25.3008C25.3529 21.322 25.4039 21.3076 25.4484 21.2805C25.5819 21.199 25.6241 21.0247 25.5426 20.8912L13.8416 1.7195L13.8416 1.71947ZM15.0505 0.98162L26.7515 20.1533C27.2405 20.9545 26.9874 22.0004 26.1862 22.4894C25.9195 22.6521 25.6132 22.7382 25.3008 22.7382H1.89876C0.960141 22.7382 0.199219 21.9773 0.199219 21.0387C0.199225 20.7263 0.285326 20.42 0.448065 20.1533L12.1491 0.98162C12.6381 0.180423 13.684 -0.0726555 14.4852 0.416323C14.7159 0.557124 14.9097 0.750918 15.0505 0.98162ZM13.5998 18.716C14.2255 18.716 14.7328 18.2087 14.7328 17.583C14.7328 16.9572 14.2255 16.4499 13.5998 16.4499C12.974 16.4499 12.4667 16.9572 12.4667 17.583C12.4667 18.2087 12.974 18.716 13.5998 18.716ZM13.5998 6.53592C12.974 6.53592 12.4667 7.04319 12.4667 7.66895V13.9006C12.4667 14.5264 12.974 15.0336 13.5998 15.0336C14.2255 15.0336 14.7328 14.5264 14.7328 13.9006V7.66895C14.7328 7.04319 14.2255 6.53592 13.5998 6.53592Z" fill="#FF0000"/>
                        </svg>

                        </div>
                    </div>
                    
                    
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className=" p-2">INTERIOR COLOR</div>
                    <div className="  p-2 px-6">
                    <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8416 1.71947C13.8181 1.68102 13.7858 1.64872 13.7474 1.62526C13.6138 1.54376 13.4395 1.58595 13.358 1.71947L1.657 20.8911C1.62987 20.9356 1.61552 20.9867 1.61553 21.0387C1.61553 21.1952 1.74236 21.322 1.89879 21.322H25.3008C25.3529 21.322 25.4039 21.3076 25.4484 21.2805C25.5819 21.199 25.6241 21.0247 25.5426 20.8912L13.8416 1.7195L13.8416 1.71947ZM15.0505 0.98162L26.7515 20.1533C27.2405 20.9545 26.9874 22.0004 26.1862 22.4894C25.9195 22.6521 25.6132 22.7382 25.3008 22.7382H1.89876C0.960141 22.7382 0.199219 21.9773 0.199219 21.0387C0.199225 20.7263 0.285326 20.42 0.448065 20.1533L12.1491 0.98162C12.6381 0.180423 13.684 -0.0726555 14.4852 0.416323C14.7159 0.557124 14.9097 0.750918 15.0505 0.98162ZM13.5998 18.716C14.2255 18.716 14.7328 18.2087 14.7328 17.583C14.7328 16.9572 14.2255 16.4499 13.5998 16.4499C12.974 16.4499 12.4667 16.9572 12.4667 17.583C12.4667 18.2087 12.974 18.716 13.5998 18.716ZM13.5998 6.53592C12.974 6.53592 12.4667 7.04319 12.4667 7.66895V13.9006C12.4667 14.5264 12.974 15.0336 13.5998 15.0336C14.2255 15.0336 14.7328 14.5264 14.7328 13.9006V7.66895C14.7328 7.04319 14.2255 6.53592 13.5998 6.53592Z" fill="#FF0000"/>
                        </svg>
                    </div>
                </div>
                
                <div className="flex justify-between bg-white w-full ">
                    <div className=" p-2">EXTERIOR COLOR</div>
                    <div className="p-2 px-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]   w-full ">
                    <div className=" p-2">DRIVE TYPE</div>
                    <div className=" p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                
                
            </div>
            <div>
                <div className="bg-blue-600 text-white p-2 px-4">
                    <h2>MANUFACTURE</h2>
                </div>
                <div className="flex justify-between bg-white w-full ">
                    <div className="  p-2 uppercase">Make</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className="p-2 uppercase">Model</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                 
            </div>

            <div>
                <div className="bg-blue-600 text-white p-2 px-4">
                    <h2>MANUFACTURE</h2>
                </div>
                <div className="flex justify-between bg-white w-full ">
                    <div className="  p-2 uppercase">Make</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className="p-2 uppercase">Model</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                 
            </div>

            <div>
                <div className="bg-blue-600 text-white p-2 px-4">
                    <h2>MANUFACTURE</h2>
                </div>
                <div className="flex justify-between bg-white w-full ">
                    <div className="  p-2 uppercase">Make</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className="p-2 uppercase">Model</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                 
            </div>
        </div>
        {/* Right  Column  */}
        <div className="flex flex-col gap-14">
            <div>
                <div className="bg-blue-600 text-white p-2 px-4">
                    <h2>MECHANICAL INFO</h2>
                </div>
                <div className="flex justify-between bg-white w-full ">
                    <div className="  p-2 uppercase">Make</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className="p-2 uppercase">Model</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
            
                <div className="flex justify-between bg-white w-full ">
                    <div className="p-2 uppercase">Variant</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]   w-full ">
                    <div className="p-2 uppercase">Milage</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                
                <div className="flex flex-col bg-white w-full ">
                    <div className="flex justify-between">
                        <div className=" p-2">TRANSMISSION</div>
                        <div className=" p-2 px-6">
                        <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8416 1.71947C13.8181 1.68102 13.7858 1.64872 13.7474 1.62526C13.6138 1.54376 13.4395 1.58595 13.358 1.71947L1.657 20.8911C1.62987 20.9356 1.61552 20.9867 1.61553 21.0387C1.61553 21.1952 1.74236 21.322 1.89879 21.322H25.3008C25.3529 21.322 25.4039 21.3076 25.4484 21.2805C25.5819 21.199 25.6241 21.0247 25.5426 20.8912L13.8416 1.7195L13.8416 1.71947ZM15.0505 0.98162L26.7515 20.1533C27.2405 20.9545 26.9874 22.0004 26.1862 22.4894C25.9195 22.6521 25.6132 22.7382 25.3008 22.7382H1.89876C0.960141 22.7382 0.199219 21.9773 0.199219 21.0387C0.199225 20.7263 0.285326 20.42 0.448065 20.1533L12.1491 0.98162C12.6381 0.180423 13.684 -0.0726555 14.4852 0.416323C14.7159 0.557124 14.9097 0.750918 15.0505 0.98162ZM13.5998 18.716C14.2255 18.716 14.7328 18.2087 14.7328 17.583C14.7328 16.9572 14.2255 16.4499 13.5998 16.4499C12.974 16.4499 12.4667 16.9572 12.4667 17.583C12.4667 18.2087 12.974 18.716 13.5998 18.716ZM13.5998 6.53592C12.974 6.53592 12.4667 7.04319 12.4667 7.66895V13.9006C12.4667 14.5264 12.974 15.0336 13.5998 15.0336C14.2255 15.0336 14.7328 14.5264 14.7328 13.9006V7.66895C14.7328 7.04319 14.2255 6.53592 13.5998 6.53592Z" fill="#FF0000"/>
                        </svg>

                        </div>
                    </div>
                    <p className="text-[#FF0303] px-2">
                    ipiscing elit. Pellentesque eget justo luctus urna sollicitudin aliquet. Nunc ut odio et a diam maximus luctus. Nunc ut dapibus nisl, id iaculis leo. Sed tincidunt to see magna arcu, a vestibulum erat eleifend at.
                    </p>
                    
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className=" p-2">INTERIOR COLOR</div>
                    <div className="  p-2 px-6">
                    <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8416 1.71947C13.8181 1.68102 13.7858 1.64872 13.7474 1.62526C13.6138 1.54376 13.4395 1.58595 13.358 1.71947L1.657 20.8911C1.62987 20.9356 1.61552 20.9867 1.61553 21.0387C1.61553 21.1952 1.74236 21.322 1.89879 21.322H25.3008C25.3529 21.322 25.4039 21.3076 25.4484 21.2805C25.5819 21.199 25.6241 21.0247 25.5426 20.8912L13.8416 1.7195L13.8416 1.71947ZM15.0505 0.98162L26.7515 20.1533C27.2405 20.9545 26.9874 22.0004 26.1862 22.4894C25.9195 22.6521 25.6132 22.7382 25.3008 22.7382H1.89876C0.960141 22.7382 0.199219 21.9773 0.199219 21.0387C0.199225 20.7263 0.285326 20.42 0.448065 20.1533L12.1491 0.98162C12.6381 0.180423 13.684 -0.0726555 14.4852 0.416323C14.7159 0.557124 14.9097 0.750918 15.0505 0.98162ZM13.5998 18.716C14.2255 18.716 14.7328 18.2087 14.7328 17.583C14.7328 16.9572 14.2255 16.4499 13.5998 16.4499C12.974 16.4499 12.4667 16.9572 12.4667 17.583C12.4667 18.2087 12.974 18.716 13.5998 18.716ZM13.5998 6.53592C12.974 6.53592 12.4667 7.04319 12.4667 7.66895V13.9006C12.4667 14.5264 12.974 15.0336 13.5998 15.0336C14.2255 15.0336 14.7328 14.5264 14.7328 13.9006V7.66895C14.7328 7.04319 14.2255 6.53592 13.5998 6.53592Z" fill="#FF0000"/>
                        </svg>
                    </div>
                </div>
                
                <div className="flex justify-between bg-white w-full ">
                    <div className=" p-2">EXTERIOR COLOR</div>
                    <div className="p-2 px-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]   w-full ">
                    <div className=" p-2">DRIVE TYPE</div>
                    <div className=" p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                <div className="flex justify-between bg-white w-full ">
                    <div className=" p-2">FUEL TYPE</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className="p-2">ENGINE</div>
                    <div className=" p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between bg-white w-full ">
                    <div className="p-2">BODY COLOR</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>


            <div>
                <div className="bg-blue-600 text-white p-2 px-4">
                    <h2>INTERIOR</h2>
                </div>
                <div className="flex justify-between bg-white w-full ">
                    <div className="  p-2 uppercase">Make</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className="p-2 uppercase">Model</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
            
                <div className="flex justify-between bg-white w-full ">
                    <div className="p-2 uppercase">Variant</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]   w-full ">
                    <div className="p-2 uppercase">Milage</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                
                <div className="flex flex-col bg-white w-full ">
                    <div className="flex justify-between">
                        <div className=" p-2">TRANSMISSION</div>
                        <div className=" p-2 px-6">
                        <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8416 1.71947C13.8181 1.68102 13.7858 1.64872 13.7474 1.62526C13.6138 1.54376 13.4395 1.58595 13.358 1.71947L1.657 20.8911C1.62987 20.9356 1.61552 20.9867 1.61553 21.0387C1.61553 21.1952 1.74236 21.322 1.89879 21.322H25.3008C25.3529 21.322 25.4039 21.3076 25.4484 21.2805C25.5819 21.199 25.6241 21.0247 25.5426 20.8912L13.8416 1.7195L13.8416 1.71947ZM15.0505 0.98162L26.7515 20.1533C27.2405 20.9545 26.9874 22.0004 26.1862 22.4894C25.9195 22.6521 25.6132 22.7382 25.3008 22.7382H1.89876C0.960141 22.7382 0.199219 21.9773 0.199219 21.0387C0.199225 20.7263 0.285326 20.42 0.448065 20.1533L12.1491 0.98162C12.6381 0.180423 13.684 -0.0726555 14.4852 0.416323C14.7159 0.557124 14.9097 0.750918 15.0505 0.98162ZM13.5998 18.716C14.2255 18.716 14.7328 18.2087 14.7328 17.583C14.7328 16.9572 14.2255 16.4499 13.5998 16.4499C12.974 16.4499 12.4667 16.9572 12.4667 17.583C12.4667 18.2087 12.974 18.716 13.5998 18.716ZM13.5998 6.53592C12.974 6.53592 12.4667 7.04319 12.4667 7.66895V13.9006C12.4667 14.5264 12.974 15.0336 13.5998 15.0336C14.2255 15.0336 14.7328 14.5264 14.7328 13.9006V7.66895C14.7328 7.04319 14.2255 6.53592 13.5998 6.53592Z" fill="#FF0000"/>
                        </svg>

                        </div>
                    </div>
                    
                    
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className=" p-2">INTERIOR COLOR</div>
                    <div className="  p-2 px-6">
                    <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8416 1.71947C13.8181 1.68102 13.7858 1.64872 13.7474 1.62526C13.6138 1.54376 13.4395 1.58595 13.358 1.71947L1.657 20.8911C1.62987 20.9356 1.61552 20.9867 1.61553 21.0387C1.61553 21.1952 1.74236 21.322 1.89879 21.322H25.3008C25.3529 21.322 25.4039 21.3076 25.4484 21.2805C25.5819 21.199 25.6241 21.0247 25.5426 20.8912L13.8416 1.7195L13.8416 1.71947ZM15.0505 0.98162L26.7515 20.1533C27.2405 20.9545 26.9874 22.0004 26.1862 22.4894C25.9195 22.6521 25.6132 22.7382 25.3008 22.7382H1.89876C0.960141 22.7382 0.199219 21.9773 0.199219 21.0387C0.199225 20.7263 0.285326 20.42 0.448065 20.1533L12.1491 0.98162C12.6381 0.180423 13.684 -0.0726555 14.4852 0.416323C14.7159 0.557124 14.9097 0.750918 15.0505 0.98162ZM13.5998 18.716C14.2255 18.716 14.7328 18.2087 14.7328 17.583C14.7328 16.9572 14.2255 16.4499 13.5998 16.4499C12.974 16.4499 12.4667 16.9572 12.4667 17.583C12.4667 18.2087 12.974 18.716 13.5998 18.716ZM13.5998 6.53592C12.974 6.53592 12.4667 7.04319 12.4667 7.66895V13.9006C12.4667 14.5264 12.974 15.0336 13.5998 15.0336C14.2255 15.0336 14.7328 14.5264 14.7328 13.9006V7.66895C14.7328 7.04319 14.2255 6.53592 13.5998 6.53592Z" fill="#FF0000"/>
                        </svg>
                    </div>
                </div>
                
                <div className="flex justify-between bg-white w-full ">
                    <div className=" p-2">EXTERIOR COLOR</div>
                    <div className="p-2 px-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]   w-full ">
                    <div className=" p-2">DRIVE TYPE</div>
                    <div className=" p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                
                
            </div>




            <div>
                <div className="bg-blue-600 text-white p-2 px-4">
                    <h2>ROAD TEST</h2>
                </div>
                <div className="flex justify-between bg-white w-full ">
                    <div className="  p-2 uppercase">Make</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className="p-2 uppercase">Model</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
            
                <div className="flex justify-between bg-white w-full ">
                    <div className="p-2 uppercase">Variant</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]   w-full ">
                    <div className="p-2 uppercase">Milage</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                
                <div className="flex flex-col bg-white w-full ">
                    <div className="flex justify-between">
                        <div className=" p-2">TRANSMISSION</div>
                        <div className=" p-2 px-6">
                        <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8416 1.71947C13.8181 1.68102 13.7858 1.64872 13.7474 1.62526C13.6138 1.54376 13.4395 1.58595 13.358 1.71947L1.657 20.8911C1.62987 20.9356 1.61552 20.9867 1.61553 21.0387C1.61553 21.1952 1.74236 21.322 1.89879 21.322H25.3008C25.3529 21.322 25.4039 21.3076 25.4484 21.2805C25.5819 21.199 25.6241 21.0247 25.5426 20.8912L13.8416 1.7195L13.8416 1.71947ZM15.0505 0.98162L26.7515 20.1533C27.2405 20.9545 26.9874 22.0004 26.1862 22.4894C25.9195 22.6521 25.6132 22.7382 25.3008 22.7382H1.89876C0.960141 22.7382 0.199219 21.9773 0.199219 21.0387C0.199225 20.7263 0.285326 20.42 0.448065 20.1533L12.1491 0.98162C12.6381 0.180423 13.684 -0.0726555 14.4852 0.416323C14.7159 0.557124 14.9097 0.750918 15.0505 0.98162ZM13.5998 18.716C14.2255 18.716 14.7328 18.2087 14.7328 17.583C14.7328 16.9572 14.2255 16.4499 13.5998 16.4499C12.974 16.4499 12.4667 16.9572 12.4667 17.583C12.4667 18.2087 12.974 18.716 13.5998 18.716ZM13.5998 6.53592C12.974 6.53592 12.4667 7.04319 12.4667 7.66895V13.9006C12.4667 14.5264 12.974 15.0336 13.5998 15.0336C14.2255 15.0336 14.7328 14.5264 14.7328 13.9006V7.66895C14.7328 7.04319 14.2255 6.53592 13.5998 6.53592Z" fill="#FF0000"/>
                        </svg>

                        </div>
                    </div>
                    <p className="text-[#FF0303] px-2 pb-2">
                    ipiscing elit. Pellentesque eget justo luctus urna sollicitudin aliquet. Nunc ut odio et a diam maximus luctus. Nunc ut dapibus nisl, id iaculis leo. Sed tincidunt to see magna arcu, a vestibulum erat eleifend at.
                    </p>
                    
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className=" p-2">INTERIOR COLOR</div>
                    <div className="  p-2 px-6">
                    <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8416 1.71947C13.8181 1.68102 13.7858 1.64872 13.7474 1.62526C13.6138 1.54376 13.4395 1.58595 13.358 1.71947L1.657 20.8911C1.62987 20.9356 1.61552 20.9867 1.61553 21.0387C1.61553 21.1952 1.74236 21.322 1.89879 21.322H25.3008C25.3529 21.322 25.4039 21.3076 25.4484 21.2805C25.5819 21.199 25.6241 21.0247 25.5426 20.8912L13.8416 1.7195L13.8416 1.71947ZM15.0505 0.98162L26.7515 20.1533C27.2405 20.9545 26.9874 22.0004 26.1862 22.4894C25.9195 22.6521 25.6132 22.7382 25.3008 22.7382H1.89876C0.960141 22.7382 0.199219 21.9773 0.199219 21.0387C0.199225 20.7263 0.285326 20.42 0.448065 20.1533L12.1491 0.98162C12.6381 0.180423 13.684 -0.0726555 14.4852 0.416323C14.7159 0.557124 14.9097 0.750918 15.0505 0.98162ZM13.5998 18.716C14.2255 18.716 14.7328 18.2087 14.7328 17.583C14.7328 16.9572 14.2255 16.4499 13.5998 16.4499C12.974 16.4499 12.4667 16.9572 12.4667 17.583C12.4667 18.2087 12.974 18.716 13.5998 18.716ZM13.5998 6.53592C12.974 6.53592 12.4667 7.04319 12.4667 7.66895V13.9006C12.4667 14.5264 12.974 15.0336 13.5998 15.0336C14.2255 15.0336 14.7328 14.5264 14.7328 13.9006V7.66895C14.7328 7.04319 14.2255 6.53592 13.5998 6.53592Z" fill="#FF0000"/>
                        </svg>
                    </div>
                </div>
                
                <div className="flex justify-between bg-white w-full ">
                    <div className=" p-2">EXTERIOR COLOR</div>
                    <div className="p-2 px-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col bg-[#EFEFEF]   w-full ">
                    <div className="flex justify-between">
                        <div className=" p-2">DRIVE TYPE</div>
                        <div className=" p-2 px-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <p className="text-[#238E34] px-2 pb-2">
                    ipiscing elit. Pellentesque eget justo luctus urna sollicitudin aliquet. Nunc ut odio et a diam maximus luctus. Nunc ut dapibus nisl, id iaculis leo. Sed tincidunt to see magna arcu, a vestibulum erat eleifend at.
                    </p>
                </div>
                
                
                
                
            </div>












            <div>
                <div className="bg-blue-600 text-white p-2 px-4">
                    <h2>MANUFACTURE</h2>
                </div>
                <div className="flex justify-between bg-white w-full ">
                    <div className="  p-2 uppercase">Make</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                </div>
                <div className="flex justify-between bg-[#EFEFEF]  w-full ">
                    <div className="p-2 uppercase">Model</div>
                    <div className="p-2 px-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0013 22.9987C18.0498 22.9987 22.9987 18.0498 22.9987 12.0013C22.9987 5.95273 18.0498 1.00391 12.0013 1.00391C5.95273 1.00391 1.00391 5.95273 1.00391 12.0013C1.00391 18.0498 5.95273 22.9987 12.0013 22.9987Z" stroke="#399F62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.32819 12.0014L10.4404 15.1136L16.676 8.88916" stroke="#399F62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
                </div>
                 
            </div>

        </div>
        
    </div>
    </>
  );
}