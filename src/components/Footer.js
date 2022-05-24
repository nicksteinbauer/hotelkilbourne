import React from 'react'
import MapWithAMakredInfoWindow from './MyMapComponentMarker'
import logo1 from "../../static/img/Kilbourne-Logo-web-ready.png";
import { Link } from 'gatsby';

const mailchimp = `
  <!-- Begin Mailchimp Signup Form -->
  
  
  <div id="mc_embed_signup">
  <form action="https://hotelkilbourne.us13.list-manage.com/subscribe/post?u=b9bda06c1ed05e0592d547a35&amp;id=978bd4912f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">

    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Address" required>
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b9bda06c1ed05e0592d547a35_978bd4912f" tabindex="-1" value=""></div>
      <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn-warning button-book btn"></div>
      </div>
  </form>
  </div>
  
  `;




const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <span id='anchor-findus' className='linky'>Linky</span>
        <div className='footer-contain'>
          <div className='footer-inside inside-lg text-center'>
            <div className='above-footer flex-md'>
              <div className='fifty'>
                <h3 className='h1'>Stay in the Know</h3>
                <p>
                  Sign up for Hotel Kilbourne's email newsletter for updates, deals and specials. Don't worry about spam, we will protect your personal information
                </p>
              </div>
              <div className='fifty flex-vertical'>
              <div className="mailchimp-inner" dangerouslySetInnerHTML={{__html: mailchimp}} />
              </div>
            </div>
          </div>
        </div>
        


      <MapWithAMakredInfoWindow
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDz85GtAL9QJwco83UH0jUx8lbeS_UNJuk&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `900px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

      <div className='real-footer'>
        <div className='inside-xl text-center'>
          <Link to="/">
              <img src={logo1} alt="Hotel Kilbourne Logo" className="bheader-logo" />
          </Link>
          <menu className='footer-menu'>
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/amenities">Amenities</Link>
            <Link to="/directions">Directions</Link>
            <Link to="/contact">Contact</Link>
          </menu>
        </div>
      </div>

      </footer>
    )
  }
}

export default Footer
