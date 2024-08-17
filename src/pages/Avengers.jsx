import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import avangerImg from '../assets/avengers.png'; // Use this as a fallback or for a specific case

const Avengers = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    // Fetch movie or series data by ID
    const fetchData = async () => {
      try {
        const movieResponse = await fetch(`http://localhost:3000/movies/${id}`);
        if (movieResponse.ok) {
          const movieData = await movieResponse.json();
          setMovie(movieData);
        } else {
          const seriesResponse = await fetch(`http://localhost:3000/series/${id}`);
          if (seriesResponse.ok) {
            const seriesData = await seriesResponse.json();
            setMovie(seriesData);
          } else {
            console.error('No data found for this ID.');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      const endpoint = movie.type === 'Movie' 
        ? `http://localhost:3000/movies/${id}` 
        : `http://localhost:3000/series/${id}`;

      const response = await fetch(endpoint, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Movie/Series deleted successfully!');
        navigate('/');  // Redirect to home page
      } else {
        console.error('Failed to delete Movie/Series');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!movie) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <div>
      <Hero />
      <div className='flex pt-28 pl-56'>
        <div>
          <img src={movie.image || avangerImg} alt={movie.title} style={{ width: '400px', height: '470px' }} />
        </div>

        <div className='ml-12 mt-2'>
          <h2 className='text-4xl font-bold'>{movie.title || 'End of Avengers'}</h2>
          <p className='mt-8' style={{ maxWidth: 640 }}>{movie.description}</p>

          <div className='mt-8'>
            <div className='flex'>
              <p className='font-bold'>Country:</p>
              <p className='ml-2'>{movie.country}</p>
            </div>
            <div className='flex'>
              <p className='font-bold'>Genre:</p>
              <p className='ml-2'>{movie.genre}</p>
            </div>
            <div className='flex'>
              <p className='font-bold'>Year:</p>
              <p className='ml-2'>{movie.year}</p>
            </div>
            <div className='flex'>
              <p className='font-bold'>Type:</p>
              <p className='ml-2'>{movie.type}</p>
            </div>

            <div className='flex space-x-10 mt-4'>
              <button className="bg-purple-500 text-white py-1 px-4 rounded-full" onClick={handleEdit}>Edit</button>
              <button className="bg-purple-500 text-white py-1 px-4 rounded-full" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avengers;
