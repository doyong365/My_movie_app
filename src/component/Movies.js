import React from "react";
import propTypes from "prop-types";
import "./Movies.css"
import {Link} from "react-router-dom";

function Movie({id,year,title,poster,summary,genres}) {
  return (
    <Link to={{
      pathname: "/movie/"+id,
      state: {
        title,
        year,
        summary,
        poster,
        genres
      }
    }}>
      <div class = "movie">
        <img src = {poster} alt={poster} title={title} />
        <div class = "movie__data">
          <h3 class = "movie__title">{title}</h3>
          <h5 class = "movie__year">{year}</h5>
          <ul class = "genres">
            {genres.map(genre => (<li class = "genres__genre">{genre}</li>
            ))}
          </ul>
          <p class = "movie__summary">{summary.slice(0,140)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id : propTypes.number.isRequired,
  year : propTypes.number.isRequired,
  title : propTypes.string.isRequired,
  poster : propTypes.string.isRequired,
  summary : propTypes.string.isRequired,
  genres : propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;