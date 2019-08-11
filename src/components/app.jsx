import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat-list';
//import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (id) => {
    console.log("Id: " + id);

    const found = this.state.flats.find(flat => flat.id === 3);
    this.setState({ selectedFlat: found });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div>
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>

          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
