import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from './publicPages/Hero'
import JobCard from './publicPages/JobCard'
import Footer from '../Component/Footer'
import Testimonial from './Shared/Testimonial'



const Home = () => {
  return <>
    <Navbar />
    <Hero />
    <JobCard />
    <Testimonial />
    <Footer /> 
    {/* <JobSection /> */}
  </>
  
}

export default Home
