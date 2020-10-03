import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import secret from '../../secret';

const AnyReactComponent = ({ text }) => (
  <div style={{ color: 'red' }}>{text}</div>
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
        <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
