// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import userManager from '../../modules/userManager';

// const AnyReactComponent = () => <img width="25" src={require('./balloon.png')} alt="baloon" />;

// class SimpleMap extends Component {


//       state = {
//         users: [],
//         latLongs: []
//       }

//       static defaultProps = {
//         center: {
//           lat: 37,
//           lng: -91
//         },
//         zoom: 4
//       };
// componentDidMount() {

//       userManager.getAll()
//       .then(usersFromData => {

//         let zipcodes = usersFromData.map(user => user.zipCode)
//         console.log("next props > old props", zipcodes)
//         zipcodes.forEach((code) => {
//             fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=******INSERT YOUR API KEY HERE!!!*****`)
//             .then(data => data.json())
//             .then(data => this.setState({
//                 latLongs: [...this.state.latLongs, data.results[0].geometry.location]
//             }))

//             console.log(this.state.latLongs)
//           })}
//       )}

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '400px', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "******INSERT YOUR API KEY HERE!!!*****" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}

//         >
//             {this.state.latLongs.map(place => (
//           <AnyReactComponent lat={place.lat} lng={place.lng} />
//         ))}

//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;