import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const AddProduktet = () => {
    const [product, setProduct] = useState({
        barkodi: "",
        emriProduktit: "",
        llojiProduktit: "",
        sasia: "",
        cmimiBlerjes: "",
        cmimiShitjes: "",
        shuma: "",
    });

    const navigate = useNavigate()



    const handleChange = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:3001/products", product)
            navigate("/products")
        }catch(err){
            console.log(err)
        }

    }

    return(

        <div>
            <div className="tabelaa">
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
                    onChange={handleChange} name="barkodi"/></td>
                    <td><input type="text" placeholder="Emri Produktit..." 
                    onChange={handleChange} name="emriProduktit"/></td>
                    <td><input type="text" placeholder="Lloji Produktit..." 
                    onChange={handleChange} name="llojiProduktit"/></td> 
                    <td><input type="number" placeholder="Sasia..." 
                    onChange={handleChange} name="sasia"/></td>
                    <td><input type="number" placeholder="Qmimi i Blerjes..." 
                    onChange={handleChange} name="cmimiBlerjes"/></td>   
                    <td><input type="number" placeholder="Shuma..." 
                    onChange={handleChange} name="shuma"/></td>  
                    <td><input type="number" placeholder="Qmimi i Shitjes..." 
                    onChange={handleChange} name="cmimiShitjes"/></td>               
                    <td><button onClick={handleClick}>Add</button></td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>

    )
}