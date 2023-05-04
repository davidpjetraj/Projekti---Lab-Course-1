import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const displaytodaysdate =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();

  return <div className="timer">{displaytodaysdate}</div>;
};

export default DateTime;
