import { BiPlus } from "react-icons/bi"
import React from "react"
import { Link } from "react-router-dom"

export const Produktet = () => {
    return(

        <div>
            <div className="searchi">
                <input type="search" placeholder="Kerko Produktin ... " />
                <Link to="/products/add-products"> < BiPlus/> Shto Produkt</Link>

            </div>
            
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