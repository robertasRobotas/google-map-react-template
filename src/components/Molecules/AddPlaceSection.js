import React, { useState } from 'react';

const AddPlaceButton = ({ getGeocode, getGeolocation, setSelectedPlace }) => {
  const [locationInput, setLocationInput] = useState('');

  return (
    <div className='addPlaceButtonWrapper'>
      <div>
        <input
          className='typePlaceInput'
          onChange={(e) => setLocationInput(e.target.value)}
          placeholder='type a place'
        />
        <button
          className='typePlaceButton'
          onClick={() =>
            getGeocode(locationInput).then((res) => {
              setSelectedPlace({
                lat: res.data.results[0].geometry.location.lat,
                lng: res.data.results[0].geometry.location.lng,
              });
            })
          }>
          go
        </button>
      </div>
      <button className='selectPlaceButton'>select place on a map</button>
      <button
        className='yourLocationButton'
        onClick={() =>
          getGeolocation().then((res) => {
            setSelectedPlace({
              lat: res.data.location.lat,
              lng: res.data.location.lng,
            });
          })
        }>
        your place
      </button>
      <button className='addPlaceButton'>Add place to Route</button>
    </div>
  );
};

export default AddPlaceButton;
