import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import secret from '../../secret';
import locationSign from '../../assets/photos/locationSign.png';

const AnyReactComponent = () => (
  <img
    style={{ width: '30px', transform: 'translate(-50%, -100%)' }}
    src={locationSign}
    alt='location'
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
        <AnyReactComponent lat={selectedPlace.lat} lng={selectedPlace.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
