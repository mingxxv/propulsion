import * as React from "react";
import { useEffect, useState } from 'react';
import DogChild from './DogChild';


const Dog = () => {

    const [dog, setDog] = useState();
    const [toggle, setToggle] = useState(true);
    const url = 'https://random.dog/woof.json?include=jpg,jpeg,gif'

    
    useEffect(() => {
        
        const makeApiCall = () => { // ACTUALLY THIS MAKEAPICALL IS STUPID
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log("This is a dog URL obj", data);
                setDog(data);
            });
        };
        makeApiCall();
            }, [toggle]);

            const flipMeBaby = () => {
                setToggle(!toggle)
            }
    

    console.log(dog?.url)

    return (
        <>
        <DogChild doggo={dog?.url} />
        <button onClick={flipMeBaby}>GIV ME DOGGO BABY</button>
        </>
    )

}

export default Dog