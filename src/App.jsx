import { Route, Routes } from 'react-router-dom'
import './App.css'
import Tires from './components/vehicle/Tires'
import Vehicle from './components/vehicle/Vehicle'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Vehicle />} />
        {/* <Sample Report/> */}
        <Route path="/report" element={<Report />} />
     
      </Routes>
      

      {/* <Vehicle/> */}
    </>
  )
}
export default App
