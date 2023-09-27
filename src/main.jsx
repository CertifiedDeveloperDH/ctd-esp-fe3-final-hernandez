import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom'
import Home from './Routes/Home.jsx'
import Detail from './Routes/Detail.jsx'
import Contact from './Routes/Contact.jsx'
import Favs from './Routes/Favs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename = {import.meta.env.DEV ? '/' : '/ctd-esp-fe3-final-hernandez'}>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Navigate to='/home' replace/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/dentist/:id" element={<Detail/>}/>
        <Route path="/favs" element={<Favs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
