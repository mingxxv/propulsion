import * as React from "react";
import Iframe from "react-iframe";

const NewAirTableForm = () => {
  return (
    <>
      <Iframe
        src="https://airtable.com/embed/shrIpJZlyQw19HRMX?backgroundColor=red"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="600"
        
      />
    </>
  );
};

export default NewAirTableForm;
