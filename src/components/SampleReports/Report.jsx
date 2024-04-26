import React from "react";
import Header from "../Header";
import Car from "../../assets/images/car.png"
import './Report.css'; // Import your CSS file for styling
function DownloadButton() {
  return (
    <div className="flex gap-4 px-4 py-4 text-xl font-semibold text-white bg-blue-600 rounded-xl max-md:flex-wrap">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/28be55babeddb1b2ef295252a56e1cd7d17db1d2d3a770626e0881ace5257463?apiKey=58b353e16f7149db9729650bdfef6357&" alt="Download icon" className="shrink-0 aspect-[1.35] w-[35px]" />
      <div className="flex-auto">Download Full Size Pictures (PDF)</div>
    </div>
  );
}

function VehicleSummary() {
  return (
    <div className="flex flex-col mt-3.5 text-black max-md:mt-9 max-md:max-w-full">
      <h1 className="text-4xl font-bold max-md:max-w-full">2018 TOYOTA CAMRY</h1>
      <h2 className="mt-11 text-3xl font-semibold max-md:mt-10 max-md:max-w-full">SUMMARY:</h2>
      <p className="mt-8 text-2xl text-black text-opacity-50 max-md:max-w-full">
        I start this inspection off with the exterior of the vehicle. The front cover has been resprayed, signs of impact on left front of cover, there are chips and scratches flaking off the right side of the cover. The head lights and grill both have chips and the right headlight has a crack in it. The hood has a ding, an outward protrus and touch up paint. The windshield has two chips. The right front fender has chips, and a dent. The right door has a dent, three dings, scratches, and chips. The quarter has a crease in the body near the fuel door, scratches, and a ding above the passenger door window. The rear cover has scratches, chips, touch respray. The trunk and tail lights have scratches. The roof has scratches. The left rear quarter has scratches. The left door has scratches, one ding, chips on mirro scratches along window.         Moving on, I find myself in the interior of the vehicle. I immediately notice signs of cigarette use. There is ash evidence in the ash tray, along the window leading edge, and behind the rear seats once folded down. The driver seat shows signs of wear on the upper bolster. There are scratches along the center console fron select button is missing its top trim. The ash tray doesn't stay open. The cargo nets behind both front seats are torn. The sun visor retainer clips are brok volume knob is not consistent with controlling the volume level. The driver window makes a screeching noise while operating. There are tosee scratches on aa both fron window tint. I scanned the on board computer for trouble codes and foundMoving on, I find myself in the interior of the vehicle. toIimmediately notice signs of cigarette use. There is ash evidence in the ash tray, along the window leading edge, and behind the rear seats once folded down.{" "}

      </p>
    </div>
  );
}

export default function Report() {
  return (
    <>
    <Header/>
    <div className="flex flex-col px-5">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/27b94c4c22277a1dfc4562c4c5f2dd16687865ef749ead914aaab793914ec661?apiKey=58b353e16f7149db9729650bdfef6357&" alt="Standard report" className="max-w-full aspect-[3.45] w-[330px]" />
      <div className="flex gap-5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
        <h1 className="flex-auto self-start text-4xl font-medium text-black text-opacity-50 max-md:max-w-full">
          SAMPLE STANDARD REPORT
        </h1>
        <DownloadButton />
      </div>
      {/* <div className="z-10 mt-8 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <VehicleSummary />
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a9ca7191b43dcedf27717b13140bab2cec7c3abba277b7f80aea29a05d180d?apiKey=58b353e16f7149db9729650bdfef6357&" alt="Vehicle exterior" className="grow w-full aspect-[1.61] max-md:mt-5 max-md:max-w-full" />
          </div>
        </div>
      </div>
      <p className="mt-4 w-full text-2xl text-black text-opacity-50 max-md:max-w-full">
        Moving on, I find myself in the interior of the vehicle. I immediately notice signs of cigarette use. There is ash evidence in the ash tray, along the window leading edge, and behind the rear seats once folded down. The driver seat shows signs of wear on the upper bolster. There are scratches along the center console fron select button is missing its top trim. The ash tray doesn't stay open. The cargo nets behind both front seats are torn. The sun visor retainer clips are brok volume knob is not consistent with controlling the volume level. The driver window makes a screeching noise while operating. There are tosee scratches on aa both fron window tint. I scanned the on board computer for trouble codes and foundMoving on, I find myself in the interior of the vehicle. toIimmediately notice signs of cigarette use. There is ash evidence in the ash tray, along the window leading edge, and behind the rear seats once folded down.{" "}
      </p> */}
      <div className="vehicle-summary">
      <div className="image">
        <img src={Car} alt="Vehicle exterior" />
      </div>
      <div className="text">
        <h1 className="text-4xl font-bold">2018 TOYOTA CAMRY</h1>
        <h2 className="mt-11 mb-4 text-3xl font-semibold">SUMMARY:</h2>
        <p>
            I start this inspection off with the exterior of the vehicle. The front cover has been resprayed, signs of impact on left front of cover, there are chips and scratches flaking off the right side of the cover. The head lights and grill both have chips and the right headlight has a crack in it. The hood has a ding, an outward protrus and touch up paint. The windshield has two chips. The right front fender has chips, and a dent. The right door has a dent, three dings, scratches, and chips. The quarter has a crease in the body near the fuel door, scratches, and a ding above the passenger door window. The rear cover has scratches, chips, touch respray. The trunk and tail lights have scratches. The roof has scratches. The left rear quarter has scratches. The left door has scratches, one ding, chips on mirro scratches along window.         Moving on, I find myself in the interior of the vehicle. I immediately notice signs of cigarette use. There is ash evidence in the ash tray, along the window leading edge, and behind the rear seats once folded down. The driver seat shows signs of wear on the upper bolster. There are scratches along the center console fron select button is missing its top trim. The ash tray doesn't stay open. The cargo nets behind both front seats are torn. The sun visor retainer clips are brok volume knob is not consistent with controlling the volume level. The driver window makes a screeching noise while operating. There are tosee scratches on aa both fron window tint. I scanned the on board computer for trouble codes and foundMoving on, I find myself in the interior of the vehicle. toIimmediately notice signs of cigarette use. There is ash evidence in the ash tray, along the window leading edge, and behind the rear seats once folded down.
            </p>
      </div>
    </div>
      <hr className="mt-10 w-full bg-black border border-black border-solid min-h-[1px] max-md:max-w-full" />
    </div>
    </>
  );
}