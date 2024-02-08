import React from 'react';
import AdminNavbar from '../../Component/adminComponent/AdminNavbar';

const AdminJobReview = () => {
  // Assuming you have job applications data
  const jobApplications = [
    // Sample data
    { id: 1, applicantName: 'John Doe', position: 'Software Engineer', status: 'Pending' },
    { id: 2, applicantName: 'Jane Smith', position: 'UI/UX Designer', status: 'Reviewed' },
    // Add more application data as needed
  ];

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Job Applications</h1>

        {jobApplications.map((application) => (
          <div key={application.id} className="bg-white p-6 rounded-md shadow mb-4">
            <h2 className="text-xl font-bold mb-2">{application.applicantName}</h2>
            <p className="text-gray-600 mb-2">{application.position}</p>
            <p className={`text-sm font-semibold ${application.status === 'Pending' ? 'text-orange-500' : 'text-green-500'}`}>
              Status: {application.status}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
              View Application
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminJobReview;

