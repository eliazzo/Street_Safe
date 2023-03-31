<<<<<<< HEAD
import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import "./map.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

function MapSection(props) {
  return (
    <div className="map">
      <h2 className="map-h2">Find your safe route home</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAvHzv00M9CQrYsgdNtPUzzXOVeXR90bvQ" }}
          defaultCenter={props.location}
          defaultZoom={props.zoomLevel}
        >
          <LocationPin
            lat={props.location.lat}
            lng={props.location.lng}
            text={props.location.crime}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default MapSection


=======
import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
>>>>>>> 9dbb835 (map appearing on the app)
