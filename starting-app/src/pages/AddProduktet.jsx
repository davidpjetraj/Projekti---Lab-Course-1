import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const AddProduktet = () => {
    const [barkodiReg, setBarkodi] = useState("");
    const [emriProduktitReg, setEmriProduktit] = useState ("");
    const [llojiProduktitReg, setllojiProduktit] = useState ("");
    const [sasiaReg, setSasia] = useState ("");
    const [cmimiBlerjesReg, setCmimiBlerjes] = useState ("");
    const [cmimiShitjesReg, setCmimiShitjes] = useState ("");
    const [shumaReg, setShuma] = useState ("");

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/products',  {
        barkodi: barkodiReg,
        emriProduktit: emriProduktitReg,
        llojiProduktit: llojiProduktitReg,
        sasia: sasiaReg,
        cmimiBlerjes: cmimiBlerjesReg,
        cmimiShitjes: cmimiShitjesReg,
        shuma: shumaReg
      }).then(res => {
        console.log('Products has been added successfully!')
        navigate('/products')
          })
        .catch(err => console.log(err));
      }

    return(

        <div>
            <div className="tabelaa">
            <form onSubmit={handleSubmit}>

            <table>
            <thead>
                <tr>
                    <th>Barkodi</th>
                    <th>Emri Produktit</th>
                    <th>Lloji Produktit</th>
                    <th>Sasia</th>
                    <th>Qmimi i Blerjes</th>
                    <th>Shuma</th>
                    <th>Qmimi i Shitjes</th>
                </tr>
            </thead>
            <tbody>
                <tr>    
                    <td><input type="number" placeholder="Barkodi..." 
                    onChange={(e) => {
                        setBarkodi(e.target.value);
                        }} name="barkodi"/></td>
                    <td><input type="text" placeholder="Emri Produktit..." 
                    onChange={(e) => {
                        setEmriProduktit(e.target.value);
                        }} name="emriProduktit"/></td>
                    <td><input type="text" placeholder="Lloji Produktit..." 
                    onChange={(e) => {
                        setllojiProduktit(e.target.value);
                        }} name="llojiProduktit"/></td> 
                    <td><input type="number" placeholder="Sasia..." 
                    onChange={(e) => {
                        setSasia(e.target.value);
                        }} name="sasia"/></td>
                    <td><input type="number" placeholder="Qmimi i Blerjes..." 
                    onChange={(e) => {
                        setCmimiBlerjes(e.target.value);
                        }} name="cmimiBlerjes"/></td>   
                    <td><input type="number" placeholder="Shuma..." 
                    onChange={(e) => {
                        setShuma(e.target.value);
                        }} name="shuma"/></td>  
                    <td><input type="number" placeholder="Qmimi i Shitjes..." 
                    onChange={(e) => {
                        setCmimiShitjes(e.target.value);
                        }} name="cmimiShitjes"/></td>               
                    <td><button type="submit">Add</button></td>
                </tr>
            </tbody>
            </table>
            </form>
            </div>
        </div>

    )
}