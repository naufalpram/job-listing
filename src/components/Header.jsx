import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../auth';

const Header = () => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <>
    <header className="flex justify-center items-center bg-no-repeat bg-cover max-h-[20vh]">
        <div className='w-full flex justify-center'>
        <Link to='/'>
            <img
            className="max-h-[20vh]"
            src="https://assets-global.website-files.com/622b063e1c5d763e016af5ee/64806bb59d2c2cbcf0cf376c_Lister.png"
            alt="logo"
            />
        </Link>
          {isLoggedIn && (
            <>
              <p className='p-12 pr-4'><strong>Welcome, {user.username}</strong></p>
              <button className='h-1/2 my-10 ml-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={logout}>Logout</button>
            </>
          )}
        </div>
    </header>
    <Outlet />
    </>
  )
}

export default Header;