import React from 'react';


const DateInputForm = props => {

// I need to link the onSubmit data to state

return(

    <form onSubmit={console.log("Form has been submitted")}>
        <input type="date" id="datePicker" name="date" min="1998-01-01"></input>
    </form>
    )

}

export default DateInputForm;