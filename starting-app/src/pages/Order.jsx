import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

export const Order = () =>{
    return(
        <div className="orderbody">
            <div className="ordername">
                <h1>ORDER #</h1>
            </div>
            {/* <div className="ordercart">
                <MdOutlineShoppingCart className="carticon"/>
                <h1>NO PRODUCTS IN THIS MOMENT ADDED</h1>
            </div> */}
            <div className="orderproduct">
                <ul>
                    <div className="borders">
                        <div className="leftside">
                        <p>Lemon Soda</p>
                        <h1>$1</h1>
                        </div>
                        <div className="rightside">
                        <p>Sasia</p>
                        <h1>2</h1>
                        </div>
                    </div>
                    <div className="borders">
                        <div className="leftside">
                        <p>Lemon Soda</p>
                        <h1>$1</h1>
                        </div>
                        <div className="rightside">
                        <p>Sasia</p>
                        <h1>2</h1>
                        </div>
                    </div>
                    <div className="borders">
                        <div className="leftside">
                        <p>Lemon Soda</p>
                        <h1>$1</h1>
                        </div>
                        <div className="rightside">
                        <p>Sasia</p>
                        <h1>2</h1>
                        </div>
                    </div>
                </ul>

                <div className="shuma">
                    <div className="first">
                      <div className="leftside">
                        <h1>Shuma</h1> <br />
                        <h1>Tips</h1>
                        <h1>TVSH 18%</h1>
                      </div>
                      <div className="rightside">
                        <h1>$5.50</h1> <br />
                        <h1>$4.51</h1>
                        <h1>$0.99</h1>
                      </div>
                    </div>
                    <div className="second">
                        <h1>TOTAL</h1>
                        <h1>$5.50</h1>
                    </div>
                    <div className="buttons">
                        <button className="cancel">Cancel Order</button>
                        <button className="send">Send Order</button>
                    </div>
                </div>

            </div>
        </div>
    )
}