import React from 'react'
import Hero from '../../companents/hero/Hero'
import Catalog from '../../companents/catalog/Catalog'
import Information from '../../companents/information/Information'
import Service from '../../companents/service/Service'
import Arrow from '../../companents/arrow/Arrow'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Catalog/>
      <Information/>
      <Service/>
      <Arrow/> 
    </div>
  )
}

export default Home 