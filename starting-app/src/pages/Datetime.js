import React from "react";

var datetime = ()=>{

    var showdate=new Date();
    var displaytodaysdate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    var dt=showdate.toDateString();
    var displattime=showdate.getHours()+':'+showdate.getMinutes();
    

    return(
        <div>
            {dt}
            <br/>
            <br/>
            {displaytodaysdate} <br/>
            {displattime}
        </div>
    )
}

export default datetime;