import * as React from 'react';

const DogChild = (props) => {

    return (
        <img src={props.doggo} alt="Wait for the dog. WAIT FOR IT!"></img> // I guess the alt text works as a kind of 'Loading' thing
    )
};

export default DogChild;