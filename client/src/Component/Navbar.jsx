import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
  const { user } = useSelector(state => state.user)

    return <>
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
        <a >Item 2</a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to='/' className="ml-6"><img src="public\assets\logo2.png" alt=""height='75px' width='150px' /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/' className='text-lg text- font-serif'>Home</Link></li>
      <li><Link to='/about' className='text-lg text- font-serif'>About US</Link></li>
      <li><Link to='/jobSection' className='text-lg text- font-serif'>Jobs</Link></li>
      <li><Link to='/enterprenuer' className='text-lg text- font-serif'>EnterPrenuer</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
  {/* Register */}
{/* <Link to='/userRegister'> <button className='btn btn-warning' >Register </button> </Link> */}

            {/* Login */}
            {
              user && user ? <button  className='font-bold text-md' onClick={()=>document.getElementById('logout').showModal()}> Welcome <br /> { user.name }</button> 
                : <Link to='/userLogin'> <button className="btn  bg-violet-900 text-white">SignIn</button></Link>
     }       


  </div>
        </div>
        
      </div>
      {user && <dialog id="logout" className="modal">
  <div className="modal-box">
          <h3 className="font-bold text-lg">Hello! { user.name }</h3>
    <p className="py-4 text-lg font-bold">Are You sure you want Logout</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-error mr-4">YES</button>
        <button className="btn btn-success">NO</button>
      </form>
    </div>
  </div>
</dialog>}
     
    </>
  
}

export default Navbar
