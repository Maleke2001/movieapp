import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Adding = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movieName, setMovieName] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    // If there's an ID, fetch the current movie or series data to populate the form
    if (id) {
      const fetchData = async () => {
        try {
          const movieResponse = await fetch(`http://localhost:3000/movies/${id}`);
          if (movieResponse.ok) {
            const movieData = await movieResponse.json();
            populateForm(movieData);
          } else {
            const seriesResponse = await fetch(`http://localhost:3000/series/${id}`);
            if (seriesResponse.ok) {
              const seriesData = await seriesResponse.json();
              populateForm(seriesData);
            } else {
              console.error('No data found for this ID.');
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  const populateForm = (data) => {
    setMovieName(data.title || '');
    setDescription(data.description || '');
    setCountry(data.country || '');
    setYear(data.year || '');
    setType(data.type || '');
    setImage(data.image || '');
    setPreview(data.image || null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // This is the base64 string
        setPreview(reader.result); // Display preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movieData = {
      title: movieName,
      description,
      country,
      year,
      type,
      image, // The image is stored as a base64 string
    };

    try {
      const endpoint = type === 'Movie' ? `http://localhost:3000/movies/${id || ''}` : `http://localhost:3000/series/${id || ''}`;
      const method = id ? 'PUT' : 'POST';

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData),
      });

      if (response.ok) {
        console.log('Movie/Series saved successfully!');
        navigate('/'); // Redirect to home page or wherever you want
      } else {
        console.error('Failed to save Movie/Series');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Hero title={id ? "EDIT MOVIE/SERIES" : "ADD A MOVIE/SERIES"} />
      <form onSubmit={handleSubmit} className='flex mt-24 mx-auto max-w-screen-lg px-4'>
        <div className="bg-gray-200 p-6 shadow-lg max-w-sm h-96">
          <input
            type="file"
            className="w-full border mt-24 border-gray-300 rounded-lg py-2 px-4 text-gray-700 bg-white"
            onChange={handleImageChange}
          />
          {preview && (
            <div className="mt-4">
              <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
            </div>
          )}
        </div>

        <div className='flex-1 ml-28'>
          <div className='space-y-6'>
            <div>
              <label htmlFor='movieName' className='block text-gray-700 text-sm font-semibold mb-2'>
                Movies/Series Name
              </label>
              <input
                id='movieName'
                type='text'
                className='border border-gray-300 p-2 rounded w-full'
                placeholder='Movies/Series Name'
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='description' className='block text-gray-700 text-sm font-semibold mb-2'>
                Description
              </label>
              <input
                id='description'
                type='text'
                className='border border-gray-300 p-2 rounded w-full'
                placeholder='Movies/Series Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='country' className='block text-gray-700 text-sm font-semibold mb-2'>
                Country
              </label>
              <input
                id='country'
                type='text'
                className='border border-gray-300 p-2 rounded w-full'
                placeholder='Country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='year' className='block text-gray-700 text-sm font-semibold mb-2'>
                Year
              </label>
              <input
                id='year'
                type='date'
                className='border border-gray-300 p-2 rounded w-full'
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div className='flex space-x-4'>
              <input
                type='radio'
                id='option1'
                name='options'
                value='Movie'
                checked={type === 'Movie'}
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor='option1' className='text-gray-700 text-sm font-semibold'>Movie</label>
              
              <input
                type='radio'
                id='option2'
                name='options'
                value='Series'
                checked={type === 'Series'}
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor='option2' className='text-gray-700 text-sm font-semibold'>Series</label>
            </div>

            <div>
              <button type='submit' className='border bg-purple-500 text-white border-gray-300 p-2 rounded-full w-full'>
                {id ? "UPDATE" : "SAVE"}
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  );
};

export default Adding;
