import React, { useEffect } from 'react';
import './movieCss.css';



const MovieCard = ({ label, imgPath, contentId, censor, duration,grn,languageFormatGroups,releaseDate }) => {
  
 


  const langArray = languageFormatGroups.map((obj) => obj.lang);

  return (
    <>
    <div className="movie-card">

      <div className="movie-header">
        <img className="movie-image" src={imgPath} alt={label} />
       
      </div>
      <div className="movie-content">
        <div className="movie-content-header">
        <h3 className="movie-title">
  {label.length > 15
    ? label.slice(0, 18)+"..."
    : label}
</h3>
<div className="movie-info">
          {Math.round(duration / 60) +'h' + ' ' + duration % 60 + ' m' } 
        </div>


        
{/* <div className="info-section">{Math.floor(duration / 60) } h {duration % 60 } </div> */}

          <div className="info-section">{censor}</div>
        </div>
        <div className="movie-info">
          <div className="info-section">
            <label>Release Date</label>
            <span>{releaseDate? releaseDate :'-'} </span>
          </div>
          <div className="info-section">
            <label>Language</label>
            <span>{langArray.join(',')}</span>
          </div>
          <div className="info-section">
            <label>Genre</label>
            <span>{grn.join(',')}</span>
          </div>

        </div>
        
      </div>
    </div>

    </>
  );
};

export default MovieCard;
