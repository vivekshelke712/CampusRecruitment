import React from 'react'

import Home from './pages/Home'
import { BrowserRouter,Routes,Route ,Outlet} from 'react-router-dom'
import Test from './pages/Test'

import UserDashboard from './pages/userPages/UserDashboard'
import UserRegistration from './pages/userPages/UserRegistration'
import About from './pages/Shared/About'
import JobDetails from './pages/publicPages/JobDetails'
import UserLogin from './pages/userPages/userLogin'
import UserNavbar from './Component/userComponent/UserNavbar'
import Protected from './pages/Shared/Protected'
import JobSection from './pages/publicPages/JobSection'
import AdminDashboard from './pages/AdminPages/AdminDashboard'
import AdminJobPost from './pages/AdminPages/AdminJobPost'
import AdminJobReview from './pages/AdminPages/AdminJobReview'
import {Toaster} from 'react-hot-toast'
const App = () => {
  return <>
    <div><Toaster
  position="top-right"
      reverseOrder={true}
      
/></div>
     <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<Test />} />
            <Route path='/userLogin' element={<UserLogin />} />
        <Route path='/userDash' element={<UserDashboard />} />
          {/* <Route index element={<UserDashboard /> } /> */}
          {/* </Route> */}
            <Route path='/userRegister' element={<UserRegistration />} />
            <Route path='/jobDetails/:id' element={<JobDetails />} />
            <Route path='/jobSection' element={<JobSection />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin/dash' element={  <AdminDashboard /> } />
        <Route path='/admin/jobPost' element={  < AdminJobPost /> } />
        <Route path='/admin/review' element={  < AdminJobReview /> } />
            <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      
        </BrowserRouter>
  </>
}

export default App
