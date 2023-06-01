import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateProducts = () => {
    const [barkodiReg, setBarkodi] = useState("");
    const [emriProduktitReg, setEmriProduktit] = useState ("");
    const [llojiProduktitReg, setllojiProduktit] = useState ("");
    const [sasiaReg, setSasia] = useState ("");
    const [cmimiBlerjesReg, setCmimiBlerjes] = useState ("");
    const [cmimiShitjesReg, setCmimiShitjes] = useState ("");
    const [shumaReg, setShuma] = useState ("");


    const navigate = useNavigate()
    const location = useLocation()

    const productId = location.pathname.split("/products")[2]

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
        console.log('Products has been updated successfully!')
        navigate('/products')
          })
        .catch(err => console.log(err));
      }

    return(
        <div lassName="tabelaa">
            <div>
                <h1>Update Products</h1>
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
                    <td><button type="submit">Update</button></td>
                </tr>
            </div>
            <button><Link to="/products">Return</Link></button>
        </div>
    )
}

export default UpdateProducts;