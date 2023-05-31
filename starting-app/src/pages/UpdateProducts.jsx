import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateProducts = () => {
    const [product, setProduct] = useState({
        barkodi: "",
        emriProduktit: "",
        llojiProduktit: "",       
        sasia: "",       
        cmimiBlerjes: "",       
        shuma: "",       
        cmimiShitjes: ""     
    });

    const navigate = useNavigate()
    const location = useLocation()

    const productId = location.pathname.split("/products")[2]

    const handleChange = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:3001/products/"+ productId, product)
            navigate("/products")
        }catch(err){
            console.log(err)
        }

    }

    console.log(product)
    return(
        <div>
            <div className="form">
                <h1>Update Products</h1>
                <input type="number" placeholder="Barkodi..." onChange={handleChange} name="barkodi"/> 
                <input type="text" placeholder="Emri Produktit..." onChange={handleChange} name="emriProduktit"/>
                <input type="text" placeholder="Lloji Produktit..." onChange={handleChange} name="llojiProduktit"/>
                <input type="number" placeholder="Sasia..." onChange={handleChange} name="sasia"/>
                <input type="number" placeholder="Qmimi i Blerjes..." onChange={handleChange} name="cmimiBlerjes"/>
                <input type="number" placeholder="Shuma..." onChange={handleChange} name="shuma"/>
                <input type="number" placeholder="Qmimi i Shitjes..." onChange={handleChange} name="cmimiShitjes"/>
                <button onClick={handleClick}>Update</button>
            </div>
            <button><Link to="/products">Return</Link></button>
        </div>
    )
}

export default UpdateProducts;