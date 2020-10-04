import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import secret from '../../secret';
import locationSign from '../../assets/photos/locationSign.png';

const AnyReactComponent = ({ text }) => (
  <img
    style={{ width: '30px', transform: 'translate(-100%, -100%)' }}
    src={locationSign}
  />
);

const Map = ({ height, width, selectedPlace }) => {
  const [zoom, setZoom] = useState(11);

  return (
    <div
      style={{
        height: height,
        width: width,
        background: 'purple',
        float: 'right',
      }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: secret.googleApiKey }}
        center={selectedPlace}
        defaultZoom={zoom}>
        <AnyReactComponent
          lat={selectedPlace.lat}
          lng={selectedPlace.lng}
          text='My Marker'
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
