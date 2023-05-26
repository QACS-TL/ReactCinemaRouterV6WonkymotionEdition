import React from 'react';

const ReleaseDateDisplay = props => {
    const releaseDateRaw = new Date(props.date);
    const releaseDateDisplay = `${releaseDateRaw.getDate()}-${releaseDateRaw.getMonth() + 1}-${releaseDateRaw.getFullYear()}`;
    return (
        <p>Release date: {releaseDateDisplay}</p>
    );
}

export default ReleaseDateDisplay;