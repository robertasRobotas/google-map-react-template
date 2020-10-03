import React, { useState } from 'react';
import PlaceSelection from '../Molecules/PlaceSelection';
import AddPlaceButton from '../Molecules/AddPlaceButton';

const Places = ({ width, height, setSelectedPlace }) => {
  const [places, setPlaces] = useState([]);

  const [mockData, setMockData] = useState([
    { lat: 59.95, lng: 40.33, title: 'aa' },
    { lat: 69.95, lng: 60.33, title: 'bb' },
    { lat: 79.95, lng: 40.33, title: 'cc' },
    { lat: 89.95, lng: 50.33, title: 'dd' },
    { lat: 59.95, lng: 30.33, title: 'ee' },
    { lat: 59.95, lng: 30.34, title: 'ff' },
  ]);
  return (
    <div
      className='places'
      style={{
        height: height,
        width: width,
        float: 'left',
      }}>
      <div className='placesPrimaryTitle'>Make a Route</div>
      <div className='placesSecondaryTitle'>Add place</div>
      <AddPlaceButton />
      {mockData.map((place) => (
        <PlaceSelection
          key={`${place.lat}${place.lng}`}
          place={place}
          setSelectedPlace={setSelectedPlace}
        />
      ))}
    </div>
  );
};

export default Places;