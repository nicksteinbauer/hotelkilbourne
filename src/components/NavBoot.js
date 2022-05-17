import React from 'react';
import { Link } from "gatsby"

import facebook from "../../static/img/social/facebook.svg";
import instagram from "../../static/img/social/instagram.svg";
import twitter from "../../static/img/social/twitter.svg";



function NavBoot() {
    return (

        <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/amenities">Amenities</Link></li>
            <li><Link to="/directions">Directions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="accordion__section inside-xs">
            <div className="menu-content social always-flex">
                
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/hotelkilbourne"><img src={facebook} alt="Facebook Link" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hotelkilbourne/?hl=en"><img src={instagram} alt="Instagram Link" /></a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/hotelkilbourne"><img src={twitter} alt="Twitter Link" /></a>
                
            </div>
        </div>


        </>

    );
}

export default NavBoot