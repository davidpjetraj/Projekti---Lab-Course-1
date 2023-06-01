import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateFatura = () => {
    const [nrFaturesReg, setNrFatures] = useState("");
    const [shumaReg, setShuma] = useState ("");
    const [dataFaturesReg, setDataFatures] = useState ("");

    const navigate = useNavigate()
    const location = useLocation()

    const paymentId = location.pathname.split("/fatura")[2]

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/fatura',  {
            nrFatures: nrFaturesReg,
            shuma: shumaReg,
            dataFatures: dataFaturesReg
      }).then(res => {
        console.log('Fatura has been updated successfully!')
        navigate('/fatura')
          })
        .catch(err => console.log(err));
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <h1>Update Fatura</h1>
                    <input type="number" placeholder="Numri Fatures..." onChange={(e) => {
                    setNrFatures(e.target.value);
                    }} name="barkodi"/> 
                    <input type="number" placeholder="Shuma Fatures..." onChange={(e) => {
                    setShuma(e.target.value);
                    }} name="emriProduktit"/>
                    <input type="date" placeholder="Data e Shitjes..." onChange={(e) => {
                    setDataFatures(e.target.value);
                    }} name="llojiProduktit"/>
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateFatura;