import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateFatura = () => {
    const [payment, setPayment] = useState({
        nrFatures: "",
        shuma: "",
        dataFatures: ""  
    });

    const navigate = useNavigate()
    const location = useLocation()

    const paymentId = location.pathname.split("/fatura")[2]

    const handleChange = (e) => {
        setPayment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:3001/fatura/"+ paymentId, payment)
            navigate("/fatura")
        }catch(err){
            console.log(err)
        }

    }

    console.log(payment)
    return(
        <div>
            <div className="form">
                <h1>Update Fatura</h1>
                <input type="number" placeholder="Numri Fatures..." onChange={handleChange} name="barkodi"/> 
                <input type="number" placeholder="Shuma Fatures..." onChange={handleChange} name="emriProduktit"/>
                <input type="date" placeholder="Data e Shitjes..." onChange={handleChange} name="llojiProduktit"/>
                <button onClick={handleClick}>Update</button>
            </div>
        </div>
    )
}

export default UpdateFatura;