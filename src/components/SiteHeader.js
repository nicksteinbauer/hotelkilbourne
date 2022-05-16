import React from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"
import logo1 from "../../static/img/Kilbourne-Logo-web-ready.png";
import { 
    //Modal, ModalHeader, ModalBody, 
    Button 
} from 'reactstrap';

const SiteHeader = () => {
  
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
                    <Button className="button-book" color="warning" size="md">Learn More</Button>
                </div>

            </div>
        </header>
        
    
  )
}

export default SiteHeader
