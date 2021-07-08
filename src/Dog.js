import * as React from "react";
import { useEffect, useState } from 'react';
import DogChild from './DogChild';


const Dog = () => {

    const [dog, setDog] = useState();
    const [toggle, setToggle] = useState(true); // puts the original state as boolean, see line 27.
    const url = 'https://random.dog/woof.json?include=jpg,jpeg,gif' // API allows you to include only specific filetypes, so nice right?!

    
    useEffect(() => {
        
        const makeApiCall = () => { // fetches dogs, is this why we yell fetch at dogs?
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log("This is a dog URL obj", data); // yeah this calls back the API as an object that we can DRILL into woot
                setDog(data);
            });
        };
        makeApiCall();
            }, [toggle]);

            const flipMeBaby = () => {
                setToggle(!toggle) // so flipMeBaby switches the toggle from true to false, allowing you to rerender on button press
            }
    
    return (
        <>
        <button className="button" onClick={flipMeBaby}>GIVE ME SOME DOGGOS</button>
        <br></br>
        <DogChild doggo={dog?.url} />
        </>
    )

}

export default Dog;