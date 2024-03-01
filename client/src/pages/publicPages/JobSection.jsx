import React, { useState } from 'react'
import Navbar from '../../Component/Navbar'
import { Link } from 'react-router-dom';
import UserNavbar from '../../Component/userComponent/UserNavbar';
import Footer from '../../Component/Footer';
import JobDetails from './JobDetails';
import JobCard from './JobCard';
import {useSelector} from 'react-redux'

const JobSection = () => {
  const {user} = useSelector(state => state.user)



  return <>
    <Navbar />
    {
      user && (user.role === "user") ?
        <JobCard />
        :<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">You are Not Login to view this page</p>
            <Link to='/userLogin' class="mb-4 text-white text-lg font-light bg-slate-900">CLick here to Login  </Link>
            <Link to='/' class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
        </div>   
    </div>
</section>
    }


    
      <Footer />
    </>
}

export default JobSection
