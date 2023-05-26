import React from 'react';

import { NavLink } from 'react-router-dom';

import { FILMIMAGES } from '../../../js/constants/images';

const FilmRow = props => {
    const releaseDateRaw = new Date(props.film.releaseDate);
    const releaseDateDisplay = `${releaseDateRaw.getDate()}-${releaseDateRaw.getMonth() + 1}-${releaseDateRaw.getFullYear()}`;
    const filmImage = FILMIMAGES[props.film.title] ? FILMIMAGES[props.film.title] : FILMIMAGES['No Image'];
    console.log(props.film.title)
    console.log(filmImage)
    return (
        <tr>
            <td className="td-center-align">{releaseDateDisplay}</td>
            <td className="td-left-align">
                <NavLink to={`/film/id/${[props.film.id]}`}>
                    {props.film.title}
                </NavLink>
            </td>
            <td>
                {props.film.showingTimes}
            </td>
            <td>
                <img src={filmImage.src} alt={filmImage.alt} width="100" />
            </td>
        </tr>

    );
}

export default FilmRow;