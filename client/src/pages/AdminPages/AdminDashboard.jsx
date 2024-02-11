import React from 'react';
import { useGetAllJobsQuery } from '../../redux/api/userApi';

const AdminDashboard = () => {
  const { data } =  useGetAllJobsQuery()

  return (
    <>
      
      <div className="bg-gray-100 min-h-screen p-8">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

        {/* Cards for various dashboard metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Jobs Posted</h3>
            <p className="text-gray-700">50</p>
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">Active Jobs</h3>
            <p className="text-green-600">30</p>
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">Pending Queries</h3>
            <p className="text-yellow-600">10</p>
          </div>
        </div>

        {/* Table for displaying job posts */}
        <div className="mt-8">
  <h3 className="text-xl font-semibold mb-4">Job Posts</h3>
  <div className="overflow-x-auto">
   <table className="min-w-full bg-white border border-gray-300">
  <thead>
    <tr className="bg-gray-200">
      <th className="py-2 px-4 border-b ml-6">#</th>
      <th className="py-2 px-4 border-b ml-6">Title</th>
      <th className="py-2 px-4 border-b ml-6">Company</th>
      <th className="py-2 px-4 border-b ml-6">salary</th>
    </tr>
  </thead>
  <tbody>
    { data && data.map((job,i) => (
      <tr key={job.id} className={(job.id % 2 === 0) ? "bg-gray-100" : "bg-white"}>
        <td className="py-2 px-4 border-b ml-6">{ i+1}</td>
        <td className="py-2 px-4 border-b ml-6">{job.jobTitle}</td>
        <td className="py-2 px-4 border-b ml-6">{job.company}</td>
        <td className="py-2 px-4 border-b ml-6">{job.salary}</td>
      </tr>
    ))}
  </tbody>
</table>

  </div>
</div>

      </div>
      
    </>
  );
};

export default AdminDashboard;
