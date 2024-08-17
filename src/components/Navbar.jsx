import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className='flex items-center justify-between p-14  text-white'>
     
      <div className='flex-none'>
        <p className='text-xl font-bold'><Link to="/"><span className='text-purple-600'>Enter-</span>Stream</Link></p>
      </div>

      
      <nav className='flex flex-1 justify-center'>
        <ul className='flex space-x-10'>
          {/* <li><a href='#movies' >Movies</a></li>
          <li><a href='#series'>Series</a></li> */}
          <Link to="/movie-page">Movies</Link>
          <Link to="/series">Series</Link>
        </ul>
      </nav>

    
      <div className='flex-none'>
      <button className="bg-purple-500 text-white  py-2 px-4 rounded-full"> Subscribe</button>


      </div>
    </div>
  );
}

export default Navbar;