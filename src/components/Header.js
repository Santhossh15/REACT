import { LOGO_URL } from "../utils/constants";
import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const [btnNameReact,setBtnNameReact] =useState("Login")
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex">
        <div className="logo-container">
            <img className="w-200" src = {LOGO_URL}></img>
        </div>
        <div ><h1 className="name">Shankar Foods</h1></div>
        <div className="nav-items">
            <ul>
                <li>
                    Online Status :{onlineStatus ? "🟢":"🔴"}
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li>Cart</li>
                <button className="login" onClick = {() => {
                    btnNameReact == "Login" ? setBtnNameReact("Logout"):setBtnNameReact("Login")}
                    }>{btnNameReact}</button>
            </ul>
        </div>
        </div>
    )
}
export default Header;