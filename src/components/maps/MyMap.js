import React, { Component } from 'react';
import { Container, Row, Col, Form, Accordion, Card, Button } from "react-bootstrap";
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';
import MarkerPopUp from '../common/MarkerPopUp'; 
import cabImage from '../../assets/images/ride.png';  
       
class MyMap extends Component {   
 
constructor(props){ 
      super(props)
      this.getDirectionsAndSearch = this.getDirectionsAndSearch.bind(this);
      this._handleCenterChanged   = this._handleCenterChanged.bind(this);
      this._handleZoomChanged     = this._handleZoomChanged.bind(this); 
      this.handleMarkerClick     = this.handleMarkerClick.bind(this); 
      this.closeMarker =  this.closeMarker.bind(this); 
      this.confirm =  this.confirm.bind(this); 

      this.state = {  
        center: { lat: 19.0760, lng: 72.8777 }, 
        zoom:13,  
        directions: {},
        markers:[],
        show:false
      };  
      this.pickupPoint = React.createRef();
      this.dropPoint   = React.createRef();
      this.age  = React.createRef();
}     

 getDirectionsAndSearch(){   
    
    const directionsService = new window.google.maps.DirectionsService(); 
     
    const origin = { lat: 19.1136, lng: 72.8697 };
    const destination = { lat: 19.1874, lng: 72.8484 };
      /*      waypoints: [
              { 
                location: 'Vile Parle',
                stopover: true
              }] 
      */
      directionsService.route(  
        { 
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING
        },  
        (result, status) => { 
          if (status === window.google.maps.DirectionsStatus.OK) {
            console.log('Directions result === ', result);
                
             const markerArray = []; 
             const myDriverRoute =  result.routes[0].legs[result.routes[0].legs.length-1].steps
             // temp0.routes[0].legs[0].steps
              // const myRoute = directionResult.routes[0].legs[0];         
              // myDriverRoute.length
              for (var i = 0; i < 5; i++) { 
                  markerArray.push( 
                     {
                      position:
                      {
                        lat:  myDriverRoute[i].start_point.lat(),
                        lng:  myDriverRoute[i].start_point.lng()
                      }     
                    }
                  );    
              }   
            
            // console.log('markerArray ==== ', markerArray); 
                         
            this.setState({  
              zoom:18,
              directions: result,
              markers:markerArray,
            });   
          } else { 
            console.error(`error fetching directions ${result}`);
          }
        } 
      );
    
       
}

_handleCenterChanged(){  
 // console.log('_handleCenterChanged====', this.refs.map.state.map);     
  console.log('_handleCenterChanged==== getCenter', this.refs.map.state.map.getCenter());  
} 
 
_handleZoomChanged(){     
 //   console.log('_handleZoomChanged====', this.state.zoom);     
    console.log('_handleZoomChanged====', this.refs.map.state.map.getZoom());    
  /*  
  if(this.state.zoom !== this.refs.map.state.map.getZoom()){       
   
      this.setState({    
              zoom:18 
      }); 
    }
     console.log('after _handleZoomChanged====', this.state.zoom); 
     */
} 

handleMarkerClick(){ 
   alert("handleMarkerClick");
   this.setState({     
              show:true
      });  
} 

closeMarker(){ 

this.setState({     
              show:false
      }); 
}

confirm(){
   alert("handleMarkerClick");
     this.setState({    
              show:false
      }); 
}

render() {   
 
 const GoogleMapExample = withGoogleMap(function(props){
      
      return(    
        <GoogleMap    
        center = {props.center}   
        zoom = {props.zoom }
        onCenterChanged= {props.onCenterChanged}
        onZoomChanged= {props.onZoomChanged}
      >                    
      {props.markers.map((marker, index) => (    
      <Marker  key ={index} {...marker}    
        icon={{  url: cabImage, anchor: new window.google.maps.Point(5, 5) }}
        onClick={props.handleMarkerClick}  
      />       
      ))}          
      <DirectionsRenderer 
          directions={props.directions}
      />    
      </GoogleMap>) 
   });        
  
 return(
      <Container>
      <Row> 
      <Col xs ={6}> 
      { this.state.show ? <MarkerPopUp show = {this.state.show} closeMarker={this.closeMarker} confirm={this.confirm} /> : null }
      <Card> 
        <Card.Header className="text-center">Get Direction and Search Driver</Card.Header>
        <Form>    
          <Form.Group controlId="addUserForm.EmailId">
            <Form.Label>Select Pickup Point</Form.Label>
            <Form.Control type="text" ref={this.pickupPoint} placeholder="Andheri" />
          </Form.Group> 
          <Form.Group controlId="addUserForm.Age">
            <Form.Label>Date</Form.Label>
            <Form.Control as="select" ref={this.age}> 
              <option value="03-03-2020">03-03-2020</option>
              <option value="04-03-2020">04-03-2020</option>
              <option value="05-03-2020">05-03-2020</option>
              <option value="06-03-2020">06-03-2020</option>
              <option value="07-03-2020">07-03-2020</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="addUserForm.Address">
            <Form.Label>Select Drop Point</Form.Label> 
            <Form.Control type="text" ref={this.dropPoint} placeholder="Malad" />
          </Form.Group>   
          <div className="text-center btn-universe">
            <Button variant="primary" onClick={() => this.getDirectionsAndSearch()}>
              Submit 
            </Button>
          </div>
        </Form>
      </Card>
      </Col>  
        <Col xs ={6}>
        <GoogleMapExample  
          ref="map"  
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          markers= {this.state.markers} 
          zoom = {this.state.zoom}
          center={this.state.center} 
          onCenterChanged={() => { this._handleCenterChanged() }}
          onZoomChanged={() => {this._handleZoomChanged() } }
          directions={this.state.directions} 
          handleMarkerClick={(e) => {this.handleMarkerClick(e)}}
        />         
      </Col>
      </Row> 
      </Container>  
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