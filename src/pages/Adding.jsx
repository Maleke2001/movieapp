import React, { useState } from 'react';
import Hero from '../components/Hero';
import addingImg from '../assets/adding.png';
import Footer from '../components/Footer';

const Adding = () => {
  const [movieName, setMovieName] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState(null);

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
      movieName,
      description,
      country,
      year,
      image, // The image is stored as a base64 string
    };

    try {
      const endpoint = type === 'Movie' ? 'http://localhost:3000/movies' : 'http://localhost:3000/series';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData),
      });

      if (response.ok) {
        console.log('Movie/Series added successfully!');
        // Optionally reset form
        setMovieName('');
        setDescription('');
        setCountry('');
        setYear('');
        setType('');
        setImage('');
        setPreview(null);
      } else {
        console.error('Failed to add Movie/Series');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Hero title="ADD A MOVIE/SERIES" />
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
                <button type='submit' className='border bg-purple-500 text-white border-gray-300 p-2 rounded-full w-full'>SAVE</button>
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
