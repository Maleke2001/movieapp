import React from 'react'

export const Movies = ({movies}) => {
  return (
    <div>
        {movies.map(movie => (
        <div
        key={movie.id}>
        <img src={movie.image} alt={movie.title} />
        </div>
      ))}
    </div>
  )
}
