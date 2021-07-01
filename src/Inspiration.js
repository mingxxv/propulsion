import * as React from "react";
import { useEffect, useState } from 'react';

const Inspiration = () => {

    const [quote, setQuote] = useState();

useEffect(() => {
    const inspirationURL = `https://zenquotes.io/api/random`;
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' , "Access-Control-Allow-Origin": "*"},
        crossDomain:true,
        mode: 'cors',
    };
    const makeApiCall = () => {
      fetch(inspirationURL, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log("QUOTES LMAO", data);
          setQuote(data);
        });
    };
    makeApiCall();

    
  }, []);


  
  return (
  <div>
      <h1>hello?</h1>
  </div>
  )
};


  export default Inspiration;




//   fetch("https://zenquotes.io/api/today", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "en-SG,en-US;q=0.9,en;q=0.8",
//     "cache-control": "max-age=0",
//     "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "document",
//     "sec-fetch-mode": "navigate",
//     "sec-fetch-site": "none",
//     "sec-fetch-user": "?1",
//     "upgrade-insecure-requests": "1"
//   },
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// });




// fetch("https://inspiration.goprogram.ai/", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "en-SG,en-US;q=0.9,en;q=0.8",
//     "cache-control": "max-age=0",
//     "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "document",
//     "sec-fetch-mode": "navigate",
//     "sec-fetch-site": "none",
//     "sec-fetch-user": "?1",
//     "upgrade-insecure-requests": "1"
//   },
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// });