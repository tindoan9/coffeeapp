import React, { useState } from "react";

function Turnover() {
    const [dayInput, setDateInput] = useState();
    const onchangeDate = (e) => {
        // e.target.value
    }
    return(
        <div className="turnover">
            <input type="text" name="date" className="date" value = {dayInput} onChange = {onchangeDate}
            placeholder = 'month'
            ></input>
        </div>
    )
}
export default Turnover;