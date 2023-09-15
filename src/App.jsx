import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {Outlet} from "react-router-dom"
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import ApiContextProvider from './context/ApiContextProvider.jsx'
import LocalstorageContextProvider from './context/LocalstorageContextProvider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ApiContextProvider>
      <LocalstorageContextProvider>
      <div className={'App'}>
        <Navbar/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
      </LocalstorageContextProvider>
      </ApiContextProvider>
    </>
  )
}

export default App
