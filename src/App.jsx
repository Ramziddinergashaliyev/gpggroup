import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './companents/layout/Layout'
import Home from './pages/home/Home'
import Company from './pages/company/Company'
import Partner from './pages/partner/Partner'
import Contact from './pages/conrtact/Contact'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index  element={<Home/>} />
        <Route path='company' element={<Company/>}/>
        <Route path='partner' element={<Partner/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default App