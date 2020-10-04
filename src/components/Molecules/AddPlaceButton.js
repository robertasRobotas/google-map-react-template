import React, { useState } from 'react';

const AddPlaceButton = ({ getGeocode, setSelectedPlace }) => {
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
              console.log(res.data);
            })
          }>
          go
        </button>
      </div>
      <div>select place</div>
      <div>your place</div>
    </div>
  );
};

export default AddPlaceButton;
