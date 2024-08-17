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
      <div className="flex justify-center mt-[70px]">
      <div className="grid grid-cols-4 gap-x-[46px] gap-y-5">
        {movies.slice(0,8).map((movie) => (
          <Link 
            to={movie.title === 'Avengers Endgame' ? '/avengers' : `/movie/${movie.id}`} 
            key={movie.id}
          >
            <img
              src={movie.image}
              alt={movie.alt}
              className='w-[150px] h-[200px] object-cover'
            />
          </Link>
        ))}
      </div>
      </div>

      <div className='justify-end flex pe-52 pt-7'>
        <Link to="/movie-page" className="flex bg-purple-500 text-white py-2 px-4 mr-14 rounded-full">
          More
        </Link>
      </div>
      
      <h1 className='flex justify-center mt-[70px] text-2xl'>LATEST SERIES</h1>
      <div className="flex justify-center mt-[70px]">
      <div className="grid grid-cols-4 gap-x-[46px] gap-y-5">
        {series.slice(0,8).map((serie) => (
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

      <div className='justify-end flex pe-52 pt-7'>
        <Link to="/series" className="flex bg-purple-500 text-white py-2 px-4 mr-14 rounded-full">
          More
        </Link>
      </div>

      <div>
             <Footers />
      </div>
 
    </div>
  );
}

export default HomePage;
