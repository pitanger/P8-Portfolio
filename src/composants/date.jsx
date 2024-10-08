import React, { useState, useEffect } from "react";

function CompDate() {
    const [weekday, setWeekday] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");

    useEffect(() => {
        const today = new Date();
        
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const localeDate = today.toLocaleDateString('fr-FR', options).split(' ');

        const formattedWeekday = today.toLocaleDateString('fr-FR', { weekday: 'long' });
        const formattedDay = today.toLocaleDateString('fr-FR', { day: 'numeric' });
        const formattedMonth = today.toLocaleDateString('fr-FR', { month: 'long' });

        setWeekday(formattedWeekday);
        setDay(formattedDay);
        setMonth(formattedMonth);
    }, []);

    return (
        <div className="current-date">
            <div className="date__weekday">{weekday}</div>
            <div className="date__day">{day}</div>
            <div className="date__month">{month}</div>
        </div>
    );
}

export default CompDate;
