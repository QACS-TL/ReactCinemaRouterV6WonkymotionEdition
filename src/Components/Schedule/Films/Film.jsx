import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import { GETSINGLEFILM } from "../../../js/constants/urls";
import ReleaseDateDisplay from "./ReleaseDateDisplay";

const Film = props => {
  // OLD react-router-dom code
  // const filmId = props.match.params.id;
  const { id } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    const getFilm = async () => {
      try {
        console.log(id);
        axios.get(`${GETSINGLEFILM}?id=${id}`)
        .then(res => res.data[0])
        .then(mov => {
          console.log({mov});
          setFilm(mov);
        })
      } catch (e) {
        setFilm(e.message);
        console.log('booE');
      }
    };
    getFilm();
  }, []);

  return (
    <div className="container">
      {Object.entries(film).length === 0 && film.constructor === Object ? (
        <Loader type="Watch" color="rgb(0, 0, 255)" height={30} width={30} />
      ) : typeof film[0] === "string" ? (
        <>
          <h1>No film found</h1>
          <p>That film reel appears to have been lost</p>
        </>
      ) : (
        <>
          <h1>{film.title}</h1>
          <div className="row">
            <div className="col-md-10 col-xs-12">
              <br />
              <h4>Synopsis:</h4> 
              <p>{film.synopsis}</p>
              <h4>Review:</h4> <p>{film.review}</p>
            </div>
            <br />
            <div className="col-md-12 col-xs-12">
              {console.log(film.img)}
            <a href={film.url}><img src={`../../images/${film.img}`} alt={film.title} width="50%"/></a>
            </div>
          </div>
          <div className="row">
            <p>Cast: {film.cast}</p>
          </div>
          <div className="row">
            <p>Director(s): {film.directors}</p>
          </div>
          <div className="row">
            <ReleaseDateDisplay date={film.releaseDate} />
          </div>
          {film.showingTimes ? (
            <div className="row">
              <p>Showing at: {film.showingTimes}</p>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Film;
