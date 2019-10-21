import React from 'react';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';



function Map(){
  return(
    <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{lat: 34.0522, lng: -118.2437}} 
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div className="App" style={{width: '100vw', height: '100vh'}} >
      <WrappedMap 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC3Ljef5iEN7MMw0HJU1hMq2ju7Ny2Wgw8`} loadingElement={<div style={{height: "100%"}} />}
      containerElement={<div style={{height: "100%"}} />}
      mapElement={<div style={{height: "100%"}} />}
      />
    </div>
  );
}

