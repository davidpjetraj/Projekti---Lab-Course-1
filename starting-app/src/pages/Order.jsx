import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

export const Order = () =>{
    return(
        <div className="orderbody">
            <div className="ordername">
                <h1>ORDER #</h1>
            </div>
            <div className="ordercart">
                <MdOutlineShoppingCart className="carticon"/>
                <h1>NO PRODUCTS IN THIS MOMENT ADDED</h1>
            </div>
        </div>
    )
}