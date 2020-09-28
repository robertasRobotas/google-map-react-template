import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ height, width }) => {
  const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 });
  const [zoom, setZoom] = useState(11);

  return (
    <div
      style={{
        height: height,
        width: width,
        background: 'purple',
        float: 'right',
        height: '100vh',
        width: '70%',
      }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC87zB-AkjcA1HQFBkM370neC_vj1Y2PMo' }}
        defaultCenter={center}
        defaultZoom={zoom}>
        <AnyReactComponent lat={69.955413} lng={30.337844} text='My Marker' />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
