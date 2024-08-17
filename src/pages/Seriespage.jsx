import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';



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
      
      {/* Button positioned at the top-right */}
      <div className="absolute right-24 mt-[24px]">
        <Link to="/addpage">
          <button className="bg-purple-500 text-white py-2 px-4 rounded-full">
            Add
          </button>
        </Link>
      </div>

      {/* Main content */}
      <h1 className='text-center mt-[100px] text-2xl'>LATEST SERIES</h1>
      
      <div className="flex justify-center mt-[50px]">
        <div className="grid grid-cols-4 gap-x-[46px] gap-y-5">
          {series.map((serie) => (
            <Link to={`/serie/${serie.id}`} key={serie.id}>
            <img
              src={serie.image}
              alt={serie.alt}
              className='w-[150px] h-[200px] object-cover'
            />
          </Link>
          ))}
        </div>
      </div>
      <Footer/>
      </div>
  );
}

export default Seriespage;
