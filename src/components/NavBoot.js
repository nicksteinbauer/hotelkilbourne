import React from 'react';
import { Link } from "gatsby"

import facebook from "../../static/img/social/facebook.svg";
import instagram from "../../static/img/social/instagram.svg";
import twitter from "../../static/img/social/twitter.svg";



function NavBoot() {
    return (

        <>
        <ul>
            <li><Link to="/landscape-contracting/all-services">All Services</Link></li>
            <li><Link to="/landscape-contracting/landscape-design-build">Landscape Design &amp; Build</Link></li>
            <li><Link to="/landscape-contracting/landscape-maintenance">Landscape Maintenance</Link></li>
            <li><Link to="/landscape-contracting/insect-disease-control">Insect &amp; Disease Control</Link></li>
            <li><Link to="/landscape-contracting/new-lawn-installation">New Lawn Installation</Link></li>
            <li><Link to="/landscape-contracting/lawn-fertilization">Lawn Fertilization</Link></li>
            <li><Link to="/landscape-contracting/tree-services">Tree Services</Link></li>
        </ul>
        <div className="accordion__section flex-md">
            <div className="menu-content social">
                
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/barnesnursery"><img src={facebook} alt="Facebook Link" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/barnes_nursery/"><img src={instagram} alt="Instagram Link" /></a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/barnesnursery"><img src={twitter} alt="Twitter Link" /></a>
                
            </div>
        </div>


        </>

    );
}

export default NavBoot