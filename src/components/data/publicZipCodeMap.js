// // import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import userManager from '../../modules/userManager';


// IMPORTANT!!!!!:: YOU MUST PUT THE API KEY YOU GET FROM GOOGLE INTO THE TWO SPACES BELOW WHERE IT SAYS "PUT YOUR API KEY HERE". THEN, YOU MUST ADD PUBLICZIPCODEMAP.JS TO YOUR GITIGNORE FILE. THEN YOU MUST UNCOMMENT THE CODE ON THIS PAGE FOR IT TO WORK. FOLLOW THE DIRECTIONS ON GITHUB FOR DEPLOYMENT.

// // Define AnyReactComponent as an image of a red balloon
// const AnyReactComponent = () => <img width="25" src={require('./balloon.png')} alt="balloon" />;

// class SimpleMap extends Component {

// // Define state for SimpleMap component
//       state = {
//         users: [],
//         latLongs: []
//       }
// // Define default map settings, which is now set to show the United States
//       static defaultProps = {
//         center: {
//           lat: 37,
//           lng: -91
//         },
//         zoom: 4
//       };
// componentDidMount() {
// // Get all users from the data base
//       userManager.getAll()
//       .then(usersFromData => {
// // Get all the users' zip codes by mapping through user data
//         let zipcodes = usersFromData.map(user => user.zipCode)
//         console.log("next props > old props", zipcodes)
//         // Loop through the zip codes, putting each zip code into the fetch call for Google Maps
//         zipcodes.forEach((code) => {
//             fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=-----------YOUR API KEY GOES HERE-----`)
//             // then put the latLongs data that comes back from Google's API into state
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
//         {/* Call Google Map's React Component using your API Key from Google */}
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "-----------YOUR API KEY GOES HERE-----" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}

//         >
//           {/* Then use the latLongs you got from Google API to put a balloon on the map */}
//             {this.state.latLongs.map(place => (
//           <AnyReactComponent lat={place.lat} lng={place.lng} />
//         ))}

//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;