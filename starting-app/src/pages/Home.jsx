import React from "react"
import { BiDollar, BiMenu } from "react-icons/bi"
import { MdOutlineAdsClick, MdPeopleOutline } from "react-icons/md"

export const Home = () => {
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
                    <th>Sasia</th>
                    <th>Qmimi</th>
                    <th>Shuma</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 12121212</td>
                    <td> Lemon Soda</td>
                    <td> 502</td>
                    <td>$69.69</td>
                    <td>$6969.69</td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
        
         
    )
}