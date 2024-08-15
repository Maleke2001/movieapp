import React from 'react'
import Hero from '../components/Hero'
import Footers from '../components/Footer';
import { Link } from 'react-router-dom'

const Moviespage = () => {

  return (
   <div>
      <Hero title=' Latest Movies'/>
      <div className="absolute right-12 mt-4">
      <Link to="/addpage">
        <button className="bg-purple-500 text-white py-2 px-4 rounded-full">
          Add
           </button>
       </Link>
   


 
      </div>

      
      
     <Footers/>

    </div>
  ) 
}

export default Moviespage
