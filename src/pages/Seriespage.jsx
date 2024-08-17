import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

const Seriespage = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {

    // Fetch series data
    fetch('http://localhost:3000/series')
      .then(response => response.json())
      .then(data => {
        console.log('Series data:', data); // Log data for debugging
        setSeries(data);
      })
      .catch(error => console.error('Error fetching series data:', error));
  }, []);

  return (
    <div>
        <Hero title='Latest Series'/>

        <div className="absolute right-12 mt-4">
        <Link to="/addpage">
           <button className="bg-purple-500 text-white py-2 px-4 rounded-full">
                Add
           </button>
        </Link>
        <h1 className='flex justify-center mt-[200px] text-2xl'>LATEST SERIES</h1>
      <div className='grid grid-cols-4 gap-x-4 gap-y-5 mt-14 ml-80'>
        {series.map((serie) => (
          <img
            key={serie.id}
            src={serie.image}
            
            className='w-[150px] h-[200px] object-cover'
          />
        ))}
      </div>
      </div>

        
    </div>
  )
}

export default Seriespage