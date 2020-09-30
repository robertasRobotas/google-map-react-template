import React from 'react';

const PlaceSelection = ({ place, setSelectedPlace }) => {
  return (
    <div
      className='placeSelectionButton'
      onClick={() =>
        setSelectedPlace({
          lat: place.lat,
          lng: place.lng,
        })
      }>
      {place.title}
    </div>
  );
};

export default PlaceSelection;
