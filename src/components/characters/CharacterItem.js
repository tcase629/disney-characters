import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.imageUrl} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Films:</strong> {item.films}
            </li>
            <li>
              <strong>TV Shows:</strong> {item.tvShows}
            </li>
            <li>
              <strong>Short Films:</strong> {item.shortFilms}
            </li>
            <li>
              <strong>Park Attractions:</strong> {item.parkAttractions}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem