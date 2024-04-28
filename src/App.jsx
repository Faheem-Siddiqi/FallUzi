import { Route, Routes } from 'react-router-dom'
import './App.css'
import Tires from './components/vehicle/Tires'
import Vehicle from './components/vehicle/Vehicle'
import Dashboard from './components/Paysubs'
import Paystubs from './components/vehicle/Paystubs'
import Paysubs from './components/Paysubs'
import Grades from './components/vehicle/Grades'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Vehicle />} />
     
      </Routes>
      

      {/* <Vehicle/> */}
    </>
  )
}
export default App
