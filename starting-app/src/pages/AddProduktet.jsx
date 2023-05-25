import React from "react"
import { useState } from "react"
import Axios from "axios"

export const AddProduktet = () => {
    const [barkodiReg, setBarkodi] = useState("");
    const [emriProduktitReg, setEmriProduktit] = useState ("");
    const [llojiProduktitReg, setLlojiProduktit] = useState ("");
    const [sasiaReg, setSasia] = useState ("");
    const [cmimiBlerjesReg, setCmimiBlerjes] = useState ("");
    const [cmimiShitjesReg, setCmimiShitjes] = useState ("");
    const [tvshReg, setTvsh] = useState ("");
    const [shumaReg, setShuma] = useState ("");
  
    const addProducts = () => {
      Axios.post("http://localhost:3001/products/add-products", {
        barkodi: barkodiReg,
        emriProduktit: emriProduktitReg,
        llojiProduktit: llojiProduktitReg,
        sasia: sasiaReg,
        cmimiBlerjes: cmimiBlerjesReg,
        cmimiShitjes: cmimiShitjesReg,
        tvsh: tvshReg,
        shuma: shumaReg,
       }).then((response) => {
          console.log(response);
       });
     };

    return(

        <div>            
            <div className="tabelaa">
            <table>
            <thead>
                <tr>
                    <th>Barkodi</th>
                    <th>Emri Produktit</th>
                    <th>Sasia</th>
                    <th>Qmimi i Blerjes</th>
                    <th>Shuma</th>
                    <th>TVSH</th>
                    <th>RABATI</th>
                    <th>Qmimi i Shitjes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="number" onChange={(e) => { 
                        setBarkodi(e.target.value);}} /></td>
                    <td><input type="text" onChange={(e) => { 
                        setEmriProduktit(e.target.value);}} /></td>                    
                    <td><input type="text" onChange={(e) => { 
                        setLlojiProduktit(e.target.value);}} /></td>      
                    <td><input type="number" onChange={(e) => { 
                        setSasia(e.target.value);}} /></td>      
                    <td><input type="number" onChange={(e) => { 
                        setCmimiBlerjes(e.target.value);}} /></td>      
                    <td><input type="number" onChange={(e) => { 
                        setCmimiShitjes(e.target.value);}} /></td>      
                    <td><input type="number" onChange={(e) => { 
                        setTvsh(e.target.value);}} /></td>      
                    <td><input type="number" onChange={(e) => { 
                        setShuma(e.target.value);}} /></td>      
                    <button onClick={addProducts}> Add </button>  
                </tr>
                <tr>
                    <td> 12121212</td>
                    <td> Lemon Soda</td>
                    <td> 502</td>
                    <td>$69.69</td>
                    <td>$6969.69</td>
                    <td>$3508.98</td>
                    <td>$3500.22</td>
                    <td>$5555</td>
                </tr>
                <tr>
                    <td> 12121212</td>
                    <td> Lemon Soda</td>
                    <td> 502</td>
                    <td>$69.69</td>
                    <td>$6969.69</td>
                    <td>$3508.98</td>
                    <td>$3500.22</td>
                    <td>$5555</td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>

    )
}