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
import EnterPrenuer from './pages/Shared/EnterPrenuer'
import AdminProtected from './share/AdminProtected'
import AdminNavbar from './Component/adminComponent/AdminNavbar'
import Footer from './Component/Footer'
import UserProtected from './share/UserProtected'
import TeacherProtected from './share/TeacherProtected'
import TeacherDashboard from './pages/teacherPages/TeacherDashboard'
import TeacherNavbar from './Component/teacaherComponent/TeacherNavbar'
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
          
          {/* <Route index element={<UserDashboard /> } /> */}
          {/* </Route> */}
            <Route path='/userRegister' element={<UserRegistration />} />
            <Route path='/jobDetails' element={<JobDetails />} />
            <Route path='/jobSection' element={<JobSection />} />
        <Route path='/about' element={<About />} />
        <Route path='/enterprenuer' element={<EnterPrenuer />} />
        {/* User Routes */}
        <Route path='/user' element={<> <UserProtected compo={<><UserNavbar /> <Outlet /> <Footer /></>} /></>}>
          <Route index element={<UserDashboard />} />
        </Route>

        {/* Teacher Routes */}
           <Route path='/teacher' element={<> <TeacherProtected compo={<><TeacherNavbar /> <Outlet /> <Footer /></>} /></>}>
          <Route index element={<TeacherDashboard />} />
        </Route>

        {/* Admin Routes */}
        <Route path='/admin' element={<><AdminProtected compo={<><AdminNavbar /> <Outlet /> <Footer /></>} /> </>}>
        <Route index element={  <AdminDashboard /> } />
        <Route path='/admin/jobPost' element={  < AdminJobPost /> } />
        <Route path='/admin/review' element={  < AdminJobReview /> } />
        </Route>
        
            <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
        </BrowserRouter>
  </>
}

export default App
