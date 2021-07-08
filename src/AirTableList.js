import * as React from "react";
import { useEffect, useState } from "react";

const AirTableList = () => {
  const [tableData, setTableData] = useState();
  const airtableKey = `${process.env.REACT_APP_AIRTABLE_KEY}`; // this is an env variable
  const url = `https://api.airtable.com/v0/appDSm0PPmAvyP3Fz/BiteMe?api_key=${airtableKey}`; // stuff the URL into a const

  useEffect(() => { // does the whole fetch thing
    const makeApiCall = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setTableData(data);
        });
    };
    makeApiCall();
  }, [url]);

  let things = tableData?.records.map((d, i) => { // this is a map function which transforms the API response into an ul li list
    return (
      <li key={i}>
        <a href={d?.fields.URL}>{d?.fields.Title}</a>
      </li>
    );
  });

  console.log(tableData?.records[0].fields.Title); // always safe to console.log right?

  return (
    <div className="column">
      <h4>Bookmarks:</h4>
      <ul>{things}</ul>
    </div>
  );
};

export default AirTableList;
