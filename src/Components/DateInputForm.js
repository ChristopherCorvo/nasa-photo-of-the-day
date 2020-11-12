import React, { useState } from 'react';


const DateInputForm = props => {

    const [ newDate, setNewDate ] = useState('')

    const { setImageDate } = props

    const handleChanges = (e) => {
        setNewDate(e.target.value)
        console.log(newDate)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        setImageDate(newDate)
        console.log(newDate)
    }


return(

    <form onSubmit={onSubmit}>
        <input 
            type="date" 
            value = {newDate}
            name="date" 
            min="1998-01-01"
            id="datePicker"
            onChange={handleChanges}
            />
            <button>Submit</button>
    </form>
    )

}

export default DateInputForm;