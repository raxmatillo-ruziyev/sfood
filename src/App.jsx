import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Navbar from './Copmonents/Navbar/Navbar'

import HomePage from './Pages/HomePage/HomePage'
import BranchPage from './Pages/BranchPage/BranchPage'
import Lavash from './Pages/Lavash/Lavsh'
import Desert from './Pages/Desert/Desert'
import Install from './Pages/Install/Install'
import Haggi from './Pages/Haggi/Haggi'
import Burger from './Pages/Burger/Burger'
import Pizza from './Pages/Pizza/Pizza'
import Sandwich from './Pages/Sandwich/Sandwich'
import AboutPage from './Pages/AboutPage/AboutPage'
import ContactPage from './Pages/ContactPage/ContactPage'

function App() {

  return (
    <>
    {/* <Navbar/> */}

     <Routes>
        <Route  path='/' element={<HomePage/>} />
        <Route  path='/About' element={<AboutPage/>} />
        <Route  path='/Branch' element={<BranchPage/>} />
        <Route  path='/contact' element={<ContactPage/>} />
        <Route  path='/Lavash' element={<Lavash/>} />
        <Route  path='/Desert' element={<Desert/>} />
        <Route  path='/Install' element={<Install/>} />
        <Route  path='/Haggi' element={<Haggi/>} />
        <Route  path='/Burger' element={<Burger/>} />
        <Route  path='/Pizza' element={<Pizza/>} />
        <Route  path='/Sandwich' element={<Sandwich/>} />
     </Routes>
 

    </>
  )
}

export default App
