import React, { useState } from 'react';
import { Link } from "gatsby";
import Reservationsnew from './Reservation';
import Menu from "../components/menu";
import logo1 from "../../static/img/Kilbourne-Logo-web-ready.png";
import { 
    Modal, ModalHeader, ModalBody, 
    Button 
} from 'reactstrap';

const SiteHeader = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


  
    return (
      
        <header className="main-header">
            <div className="always-flex justify inside-xl">

                <div className="ham-holder flex-vertical"><Menu /></div>
                <div className="logo-contain">
                <Link to="/">
                    <img src={logo1} alt="Hotel Kilbourne Logo" className="bheader-logo" />
                </Link>
                </div>
                <div className="button-holder flex-vertical">
                    <Button className="button-book" color="warning" size="md" onClick={toggle}>Book Now</Button>
                </div>

            </div>
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
        </header>
        
    
    )
}

export default SiteHeader
