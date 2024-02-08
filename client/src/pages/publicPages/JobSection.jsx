import React, { useState } from 'react'
import Navbar from '../../Component/Navbar'
import { Link } from 'react-router-dom';
import UserNavbar from '../../Component/userComponent/UserNavbar';
import Footer from '../../Component/Footer';
import JobDetails from './JobDetails';

const JobSection = () => {
  const [isLogin, setisLogin] = useState(false)
 const jobData = [
    {
        title: "React Developer",
        desc: "Work on developing user interfaces using React.",
        eligible: "Bachelor's degree in Computer Science or related field",
        experience: "2+ years of experience in React development",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        company: "TechCo"
    },
    {
        title: "Node.js Backend Developer",
        desc: "Build scalable and efficient backend systems using Node.js.",
        eligible: "Bachelor's degree in Computer Science or equivalent",
        experience: "3+ months of experience in Node.js development",
        image: "https://media.istockphoto.com/id/1188511715/photo/back-end-project-architecture-development-database-development-planning.jpg?s=1024x1024&w=is&k=20&c=iu85vPBd-XdJhN8UwBr66NKgNw0Q_Bv0_2cSj5AR5OE=.jpg",
        company: "CodeHub"
    },
    {
        title: "Full Stack Developer",
        desc: "Develop end-to-end solutions using a combination of React and Node.js.",
        eligible: "Bachelor's degree in Computer Science or related field",
        experience: "4+ months of experience in full stack development",
        image: "https://plus.unsplash.com/premium_photo-1661589763483-b30d5f3ae5bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVsbCUyMHN0YWNrJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
        company: "WebSolutions"
    },
    
    {
        title: "Mobile App Developer",
        desc: "Create mobile applications for iOS and Android platforms.",
        eligible: "Bachelor's degree in Computer Science or equivalent",
        experience: "2+ months of experience in mobile app development",
        image: "https://plus.unsplash.com/premium_photo-1661589763483-b30d5f3ae5bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVsbCUyMHN0YWNrJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
        company: "AppTech"
    },
    {
        title: "Data Scientist",
        desc: "Analyze and interpret complex data sets to inform business decisions.",
        eligible: "Master's or Ph.D. in Data Science, Statistics, or related field",
        experience: "5+ years of experience in data science",
        image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
        company: "DataInsights"
    },
    {
        title: "UI/UX Designer",
        desc: "Create visually appealing and user-friendly interfaces.",
        eligible: "Bachelor's degree in Design or equivalent",
        experience: "3+ years of experience in UI/UX design",
        image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
        company: "DesignCraft"
    },
    {
        title: "DevOps Engineer",
        desc: "Implement and manage continuous integration and deployment pipelines.",
        eligible: "Bachelor's degree in Computer Science or related field",
        experience: "4+ years of experience in DevOps",
        image: "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2b3BzfGVufDB8fDB8fHww",
        company: "DevOpsSolutions"
    },
    {
        title: "Machine Learning Engineer",
        desc: "Develop and implement machine learning models for various applications.",
        eligible: "Master's or Ph.D. in Machine Learning, Computer Science, or related field",
        experience: "3+ years of experience in machine learning",
        image: "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2b3BzfGVufDB8fDB8fHww",
        company: "MLInnovations"
    }
];


  return <>
    <Navbar />
    {
      isLogin ?
        <JobSection />
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
