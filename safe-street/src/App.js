<<<<<<< HEAD
import React from "react";
import MapSection from "./components/map/Map.jsx"; // import the map here

const location = {
  crime: "Crime type",
  lat: 37.42216,
  lng: -122.08427,
}; // our location object from earlier
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';
>>>>>>> 9dbb835 (map appearing on the app)

function App() {
  return (
    <div className="App">
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    </div>
  );
}

export default App;
