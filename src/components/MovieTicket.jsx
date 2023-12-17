import React from 'react'
import MovieCard from './Moviecard';
import './movieCss.css'
import data from '../data'
import { Link } from 'react-router-dom'
const movieData = data.data.groupedMovies

console.log(movieData)




const MovieTicket = () => {
  return (
    <div>




      <div className='heading-centre'>
        <h1>

          NOW STREAMING
        </h1>
      </div>
      <div className="container1">

        <div className="container">
          {
            movieData.map((obj) => {
              // return <Link to={'/restaurant/'+res.info.id}><Card {...res.info} key={res.info.id} /></Link>
              return <Link to={'/movie/' + obj.contentId}> <MovieCard {...obj} id={obj.contentId} /> </Link>
            })
          }
        </div>
      </div> 
    </div>

  );
};

export default MovieTicket;