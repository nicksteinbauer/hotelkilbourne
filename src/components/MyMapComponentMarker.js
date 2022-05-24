import React from "react";
import MapStyles from "./MapStyles";




const { compose, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 41.4602371, lng: -82.7135722 }}
    options={{
        styles: MapStyles.styles,
    }}
  >
    <Marker
      position={{ lat: 41.4569433, lng: -82.7135722 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
      <div>
          <h3>Hotel Kilbourne</h3>
        <p>
            In the area?<br/>
            <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir//Hotel+Kilbourne,+223+W+Water+St,+Sandusky,+OH+44870/@41.4602371,-82.722319,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883a45e764ff98bf:0xc434c6fcf3436132!2m2!1d-82.7135722!2d41.4569433">Get Directions</a>
        </p>
      </div>
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);

export default MapWithAMakredInfoWindow;























