import { Route, Routes } from 'react-router-dom'
import './App.css'
import Tires from './components/vehicle/Tires'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Tires />} />
     
      </Routes>
    </>
  )
}
export default App
