import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Footers from '../components/Footer';
import { Link } from 'react-router-dom'

const Moviespage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies data
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => {
        console.log('Movies data:', data); // Log data for debugging
        setMovies(data);
      })
      .catch(error => console.error('Error fetching movies data:', error));

  }, []);


  return (
   <div>
      <Hero title=' Latest Movies'/>
    
  <div className="absolute right-24 mt-[24px]">
    <Link to="/addpage">
      <button className="bg-purple-500 text-white py-2 px-4 rounded-full">
        Add
      </button>
    </Link>
  </div>
  
  <div className="flex justify-center mt-[100px]">
    <div className="grid grid-cols-4 gap-x-[46px] gap-y-5">
      {movies.map((movie) => (
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


      <div className="mt-[90px]">
    <Footers/>
</div>


    </div>
  ) 
}

export default Moviespage
