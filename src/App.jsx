import { Route, Routes } from 'react-router-dom'
import './App.css'
import Tires from './components/vehicle/Tires'
import Vehicle from './components/vehicle/Vehicle'
import Report from './components/SampleReports/Report.jsx'
import VehicleInfo from './components/vehicle/VehicleInfo'
import Paystubs from './components/Paystubs.jsx'
import Paysubs from './components/Paysubs.jsx'
import Feedback from './components/feedback/feedback.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Vehicle />} />
        {/* <Sample Report/> */}
        <Route path="/report" element={<Report />} />
        <Route path="/vehicle" element={<VehicleInfo />} />
        <Route path="/Paystubs" element={<Paystubs />} />
        <Route path="/Paysubs" element={<Paysubs />} />

        {/* Feedback */}
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      {/* <Vehicle/> */}
    </>
  )
}
export default App
