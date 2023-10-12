import { Footer, SpecialOffer,Hero, CustomerReviews, Subscribe, SuperQuality, Services, PopularProducts } from './sections'
import Nav from './Components/Nav'
import { useState } from 'react'

import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main className='relative'>
     
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='padding bg-blue-50'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
       <Footer/>
      </section>
     </main>

        
    </>
  )
}

export default App
