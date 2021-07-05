import * as React from "react";
import { useEffect, useState } from "react";

const AirTableList = () => {
  const [tableData, setTableData] = useState();
const url = "https://api.airtable.com/v0/appDSm0PPmAvyP3Fz/BiteMe?api_key=keyRrh1r4IS1PJFDI"

useEffect(() => {
        
    const makeApiCall = () => { // just putting shit into a function i guess
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setTableData(data);
        });
    };
    makeApiCall();
}, []);

console.log(tableData?.records[0].fields.Title)

  return <div>eat me lmao</div>;
};

export default AirTableList;
