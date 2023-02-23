import React from "react";

const Calendar = (props) =>{
    const [date, setDate] = useState(new Date());
    function handleDateChange(date) {
      setDate(date);
    }

    return(
        <>
            <Calendar value={date} onChange={handleDateChange} />
        </>
    );

}
export default Calendar;