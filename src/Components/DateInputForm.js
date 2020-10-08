import React from 'react';


const DateInputForm = props => {

    
return(
    <input type="date" id="start" 
    name="trip-start"
       value="2018-07-22"
       min="1998-01-01" max="2020-10-01">
    </input>

    )

}

export default DateInputForm