import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";

export const Pagesa = () => {
    const [payments, setPayments] = useState([])

    useEffect(()=>{
        const fetchAllPayments = async ()=>{
            try{
                const res = await axios.get("http://localhost:3001/fatura")
                setPayments(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllPayments()
    }, [])

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:3001/fatura/"+id)
            window.location.reload()
        } catch(err){
            console.log(err)
        }
    }


    return(

        <div>
            <div className="tabelaa">
            <h1>Faturat</h1>
            <table>
            <thead>
                <tr>
                    <th>Numri Fatures</th>
                    <th>Shuma Fatures</th>
                    <th>Data e Shitjes</th>
                    <th>Emri Shitesit</th>
                    <th><button><Link to="/">Shto Fatur te Re</Link></button></th>

                </tr>
            </thead>
            <tbody>
            {payments.map(payment=>(
                <tr key={payment.id}>
                    <td>{payment.nrFatures}</td>
                    <td>{payment.shuma}€</td>
                    <td>{payment.dataFatures}</td>
                    <td><button onClick={()=>handleDelete(payment.id)}>Delete</button></td>
                    <td><button><Link to={'/updateFatura/${payment.id}'}>Update</Link></button></td>
                </tr>
            ))}      
            </tbody>
            </table>
            </div>
        </div>

    )
}