import { BiDollar, BiMenu } from "react-icons/bi"
import { MdOutlineAdsClick, MdPeopleOutline } from "react-icons/md"
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
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
    return(
        <div className="mainbody">
                <div className="body">
                    <div className="box">
                        <BiDollar className="icona"/>
                        <label> <BiDollar/> 12456</label>
                        <h1>Total Revenue</h1>
                    </div>
                    <div className="box">
                        <BiMenu className="icona"/>
                        <label>  1039</label>
                        <h1>Total Orders</h1>
                    </div>
                    <div className="box">
                        <MdPeopleOutline className="icona"/>
                        <label> 840</label>
                        <h1>Walk-ins</h1>
                    </div>
                    <div className="box">
                        <MdOutlineAdsClick className="icona"/>
                        <label> 199</label>
                        <h1>Online Orders</h1>
                    </div>
                </div>
            <div className="tabela">
            <table>
            <thead>
                <tr>
                    <th>Barkodi</th>
                    <th>Emri Produktit</th>
                    <th>Lloji Produktit</th>
                    <th>Sasia</th>
                    <th>Qmimi Shitjes</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product=>(
                <tr key={product.id}>
                    <td>{product.barkodi}</td>
                    <td>{product.emriProduktit}</td>
                    <td>{product.llojiProduktit}</td>
                    <td>{product.sasia}</td>
                    <td>{product.cmimiShitjes}€</td>
                    <td><button>Add</button></td>
                </tr>
            ))}
            </tbody>
            </table>
            </div>
        </div>
        
         
    )
}