import React from "react";

const Child = ({fName, trimming}) => {

    return(

        <input type="text" value={fName} onBlur={()=>trimming(fName.trim())} />

    );
};

export default Child;