import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar(){
    return(
        <nav className="navbar">
            <span className="navbar--text">my travel journal.</span>
             <FontAwesomeIcon icon="fa-solid fa-globe" />
        </nav>
    )
}