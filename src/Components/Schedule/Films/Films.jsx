import React from "react";
import Loader from "react-loader-spinner";

import FilmsTable from "./FilmsTable";

const Films = props => {
  if (props.films.length === 0) {
    return (
      <Loader type="Watch" color="rgb(0, 0, 255)" height={30} width={30} />
    );
  } else if (props.films.length === 1 && typeof props.films[0] === "string") {
    return (
      <div className="container">
        <h1>{props.heading}</h1>
        <p>{`There are no ${props.heading} films to display at the moment`}</p>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>{props.heading}</h1>
        <FilmsTable films={props.films} status={props.status} />
      </div>
    );
  }
};

export default Films;
