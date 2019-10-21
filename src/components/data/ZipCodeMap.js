import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <img width="25" src={require('./balloon.png')} alt="baloon" />;

class SimpleMap extends Component {

    static defaultProps = {
        center: {
          lat: 37,
          lng: -91
        },
        zoom: 4
      };

// componentWillReceiveProps(nextProps) {
//     console.log("Old Props", this.props)
//     console.log("New Props", nextProps)

//     if (nextProps.users.length > this.props.users.length) {

//         let zipcodes = nextProps.users.map(user => user.zipCode)
//         console.log("next props > old props", zipcodes)
//         zipcodes.forEach((code) => {
//             fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=AIzaSyDANTNXNHy97irRUaUeoH18BAO3ax4rqts`)
//             .then(data => data.json())
//             .then(data => this.setState({
//                 latLongs: [...this.state.latLongs, data.results[0].geometry.location]
//             }))
//         })
//     }
// }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDANTNXNHy97irRUaUeoH18BAO3ax4rqts" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}

        >
            {/* {this.props.latLongs.map(place => (
          <AnyReactComponent lat={place.lat} lng={place.lng} />
        ))} */}
          <AnyReactComponent
            lat={38.3751952}
            lng={-82.3994214}

          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;