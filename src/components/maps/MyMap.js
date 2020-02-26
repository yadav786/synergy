import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';

class MyMap extends Component {   
 
constructor(props){
     super(props)
       this.selectSource = this.selectSource.bind(this);
     this.state = {
        directions: null
      };     
}  

componentDidUpdate(){
  alert('hello'); 
  
} 

 selectSource(){  
   // e.preventDefault(); 
   // console.log('e=====', e);  
     
     console.log('window === ', window.google);  
  
    const directionsService = new window.google.maps.DirectionsService();
    console.log('directionsService',directionsService);
    const origin = { lat: 19.0760, lng: 72.8777 };
    const destination = { lat: 18.5204, lng: 73.8567 };
    
      directionsService.route(
        { 
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else { 
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    
       
}


render() {  
 
 const GoogleMapExample = withGoogleMap(props =>
      <GoogleMap
        defaultCenter = { { lat: 19.0760, lng: 72.8777 }}
        defaultZoom = { 13 }
      >  
      <DirectionsRenderer
          directions={this.state.directions}
      /> 
      </GoogleMap>
   ) ;      
  
 return(
      <> 
      <div> 
        <GoogleMapExample   
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
        <button onClick={() => this.selectSource()}>Select Source</button>
      </> 
   );
  }
};
export default MyMap;
/*
import React from 'react'; 
import { withScriptjs } from "react-google-maps";
import MyMapComponent from './MyMapComponent';

const MyMap = () => {   
  const MapLoader = withScriptjs(MyMapComponent);

  return ( 
    <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHxjn0GJBMDNfjnMZFkiyqry52VO0b1MQ"
      loadingElement={<div style={{ height: `100%` }} />} 
    />    
  );  
}; 

export default MyMap;
*/