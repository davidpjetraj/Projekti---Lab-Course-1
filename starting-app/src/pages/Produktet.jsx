import { BiPlus } from "react-icons/bi"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";


export const Produktet = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchAllProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:3001/products")
                setProducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllProducts()
    }, [])

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:3001/products/add-products/"+id)
            window.location.reload()
        } catch(err){
            console.log(err)
        }
    }


    return(

        <div>
            <div className="searchi">
              
                <button><Link to="/products/add-products"> < BiPlus/> Shto Produkt</Link></button>

            </div>
            
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
            {products.map(product=>(
                <tr key={product.id}>
                    <td>{product.barkodi}</td>
                    <td>{product.emriProduktit}</td>
                    <td>{product.llojiProduktit}</td>
                    <td>{product.sasia}</td>
                    <td>{product.cmimiBlerjes}€</td>
                    <td>{product.shuma}€</td>
                    <td>{product.cmimiShitjes}€</td>
                    <td><button onClick={()=>handleDelete(product.id)}>Delete</button></td>
                    <td><button><Link to={'/updateProducts/${product.id}'}>Update</Link></button></td>
                </tr>
            ))}      
            </tbody>
            </table>
            </div>
        </div>

    )
}