import React, { useState } from 'react';
import { Link } from "gatsby";
import Reservationsnew from './Reservation';
import Menu from "./Menu";

import logo1 from "../../static/img/Kilbourne-Logo-web-ready.png";
import logo2 from "../../static/img/Kilbourne-Logo-web-ready-minimal.png";
import { 
    Modal, ModalHeader, ModalBody, 
    Button 
} from 'reactstrap';

const SiteHeaderHome = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const [navigate,setNavigate] = useState(false);
    const changeBackground = () => {  
      if(window.scrollY >= 2) {
        setNavigate(true)
      }else {
        setNavigate(false)
      }
    }
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', changeBackground);
    }


  
    return (
      
        <header className={navigate ? 'main-header active' : 'main-header'}>
            <div className="always-flex justify inside-xl">

                <div className="ham-holder flex-vertical"><Menu /></div>
                <div className="logo-contain home-logo">
                <Link to="/">
                    <img src={logo1} alt="Hotel Kilbourne Logo" className="bheader-logo" />
                    <img src={logo2} alt="Hotel Kilbourne Logo Minimal" className="bheader-logo-minimal" />
                </Link>
                </div>
                <div className="button-holder flex-vertical">
                    <Button className="button-book desktop" color="warning" size="md" onClick={toggle}>Book Now</Button>
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

export default SiteHeaderHome
