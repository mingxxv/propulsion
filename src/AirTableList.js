import * as React from "react";
import { useEffect, useState } from "react";

const AirTableList = () => {
  const [tableData, setTableData] = useState();
  const airtableKey = `${process.env.REACT_APP_AIRTABLE_KEY}`;
  const url = `https://api.airtable.com/v0/appDSm0PPmAvyP3Fz/BiteMe?api_key=${airtableKey}`;

  useEffect(() => {
    const makeApiCall = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setTableData(data);
        });
    };
    makeApiCall();
  }, [url]);

  let things = tableData?.records.map((d, i) => {
    return (
      <li key={i}>
        <a href={d?.fields.URL}>{d?.fields.Title}</a>
      </li>
    );
  });

  console.log(tableData?.records[0].fields.Title);

  return (
    <div className="column">
      <h4>Bookmarks:</h4>
      <ul>{things}</ul>
    </div>
  );
};

export default AirTableList;
