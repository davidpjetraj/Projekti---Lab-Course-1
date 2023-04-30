import React from "react"
import { BiDollar, BiMenu } from "react-icons/bi"
import { MdOutlineAdsClick, MdPeopleOutline } from "react-icons/md"

export const Home = () => {
    return(
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
         
    )
}