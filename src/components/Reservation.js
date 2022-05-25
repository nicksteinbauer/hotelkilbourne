
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const reservation = `
setup_parameters =
{
    "hotel_id":"1271",				// required - your WebRezPro hotel id must be entered
    "date_format":"D M dd, yy", 	// optional - default is 'DD M dd, yy'
    "default_days_in_advance":"0",	// optional - default is 0 days in advance,
    "flag_turnoff_autoload_date":"1" // 0 = arrival and departure dates automatically loaded, 1 = not loaded, default is 0
};

`;

function Reservationsnew() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
   
  return (
      <div className="reservations">
        <script className="reservations-inner"
          dangerouslySetInnerHTML={{__html: reservation}}
        />
        <div className="reservations">
        
        <form id="widget_link" action="https://secure.webrez.com/hotel/1953/?" method='get' target='_blank'>
        
        <input type="hidden" name="table" value=""/>
        <input type="hidden" name="hotel_id" value=""/>
        <input type="hidden" name="listing_id" value=""/>
        <input type="hidden" name="mode" value=""/>
        <input type="hidden" name="command" value=""/>
        <input type="hidden" name="nextcommand" value="roomsearch" />

        
        <ul>
          <li className="always-flex">
            <span className="fifty">
                <label htmlFor="formatted_date_from">Arrival date</label>
                <DatePicker className="datepicker" name="date_from" id="date_from"  selected={startDate} onChange={(date) => setStartDate(date)} />
            </span>
            <span className="fifty">
                <label htmlFor="formatted_date_to">Departure date</label>
                <DatePicker className="datepicker" name="date_to" id="date_to" selected={endDate} onChange={(date) => setEndDate(date)} />
            </span>
          </li>
                    
          <li className="always-flex">
              <span className="fifty">
                  <label htmlFor="num_adults"># of adults</label>
                  <div>
                      <select name="num_adults" id="num_adults">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      </select>
                  </div>
              </span>
              <span className="fifty">
                  <label htmlFor="num_children"># of children</label>
                  <div>
                      <select name="num_children" id="num_children">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      </select>
                  </div>
              </span>
          </li>
          <li className="always-flex">
              <span className="fifty">
                <label htmlFor="access_code">Promo Code</label>
                <input type="text" name="access_code" id="access_code" size="8"/>
              </span>
              <span className="fifty"><input type="submit" value="check availability"/></span>
          </li>
          
        
          
        </ul>
        
      </form>
      </div>
      </div>

  )
}


export default Reservationsnew;


