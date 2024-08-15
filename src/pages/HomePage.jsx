import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Footers from '../components/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    // Fetch movies data
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => {
        console.log('Movies data:', data); // Log data for debugging
        setMovies(data);
      })
      .catch(error => console.error('Error fetching movies data:', error));

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
      <Hero />
      <h1 className='flex justify-center mt-14 text-2xl'>LATEST MOVIES</h1>
      <div className='grid grid-cols-4 gap-x-[10px] gap-y-5 mt-14 ml-60'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={movie.src}
            alt={movie.alt}
            className='w-[150px] h-[200px] object-cover'
          />
        ))}
      </div>
      <div className='justify-end flex pe-52 pt-7'>
        <Link to="/movie-page" className="flex bg-purple-500 text-white py-2 px-4 mr-14 rounded-full">
          More
        </Link>
      </div>
      
      <h1 className='flex justify-center mt-[200px] text-2xl'>LATEST SERIES</h1>
      <div className='grid grid-cols-4 gap-x-4 gap-y-5 mt-14 ml-80'>
        {series.map((serie) => (
          <img
            key={serie.id}
            src={serie.src}
            alt={serie.alt}
            className='w-[150px] h-[200px] object-cover'
          />
        ))}
      </div>
      <Footers />
    </div>
  );
}

export default HomePage;
