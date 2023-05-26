import React from 'react';

const ImageContainer = props => {
    return (
        <img src={props.image.src} alt={props.image.alt} style={{ width: props.width }} className="img-fluid" />
    );
}

export default ImageContainer;