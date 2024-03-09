import React from 'react';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { useGetAllJobsQuery } from '../../redux/api/userApi';

const JobCard = () => {
    const {user } = useSelector(state => state.user)
    const { data, isLoading, isError } = useGetAllJobsQuery();

    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Render job cards
    return (
        <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
    {data && data.map(item => (
        <div className="w-full " key={item.id}>
            <div className="card w-96 border m-9 hover:scale-105  text-black">
                <div className="card-body ">
                    <h2 className="card-title">{item.jobTitle}</h2>
                    <h3 className="job-role">{item.jobRole}</h3>
                    <p><strong>Experience:</strong> {item.experience}</p>
                    <p>{item.jobDesc}</p>
                    <p><strong>Salary:</strong> {item.salary}</p>
                    <p><strong>Location:</strong> {item.location}</p>
                    <p><strong>Skills:</strong> {item.skills}</p>
                    <div className="card-actions justify-end">
                        
                        {
                            user && (user.role ==="user") ? <Link to='/jobDetails' className="btn">Apply now</Link> : 
                          <Link to='/userLogin'><button className='btn '>Login As User</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>

</>

    );
}

export default JobCard;
