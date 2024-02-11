import React from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'

const JobDetails = () => {
  return <>
      <Navbar />
         <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Automation Developer</h1>

        {/* Skill Set Required */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Skills Required</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Experience in UiPath development</li>
            <li>Knowledge of Investment Banking</li>
          </ul>
        </div>

        {/* Roles and Responsibilities */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Responsibilities</h2>
          <p className="text-gray-700">
            - Coordinating with stakeholders for project understanding.
            <br />
            - Providing automation solutions for process issues.
          </p>
        </div>

        {/* Job Details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Job Details</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Role: Automation Developer</li>
            <li>Industry: IT Services & Consulting</li>
            <li>Employment Type: Full Time</li>
          </ul>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Education</h2>
          <p className="text-gray-700">UG: B.Tech/B.E. in Any Specialization</p>
        </div>

        {/* Apply Now */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Apply Now</h2>
          <p className="text-gray-700 leading-relaxed">
            Interested in this role? Click the button below to apply.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600">
            Apply Now
          </button>
        </div>
      </div>
    </div>
    <Footer />
   </>
}

export default JobDetails
