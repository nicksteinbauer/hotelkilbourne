import React, { useState } from 'react';
import { Link } from "gatsby"
import Reservationsnew from './Reservation';
import facebook from "../../static/img/social/facebook.svg";
import instagram from "../../static/img/social/instagram.svg";
import twitter from "../../static/img/social/twitter.svg";

import { 
    Modal, ModalHeader, ModalBody, 
    Button 
} from 'reactstrap';


function NavBoot() {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    return (

        <>

            <Button className="button-book mobile" color="warning" size="md" onClick={toggle}>Book Now</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>
                    <span className="title">Reservations</span>
                </ModalHeader>
                <ModalBody>

                <div className="modal-window">
                    <div className="padding-10">
                    <Reservationsnew />
                    </div>
                </div>

                </ModalBody>
            </Modal>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/amenities">Amenities</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/oh-taco">Oh-Taco</Link></li>
            <li><Link to="/moseleys">Moseleys</Link></li>
            <li><Link to="/directions">Directions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="accordion__section inside-xs">
            <div className="menu-content social always-flex">
                
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/hotelkilbourne"><img src={facebook} alt="Facebook Link" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hotelkilbourne/?hl=en"><img src={instagram} alt="Instagram Link" /></a>
                
            </div>
        </div>


        </>

    );
}

export default NavBoot