import React, { useState } from 'react';
import PlaceSelection from './PlaceSelection';

const Places = ({ width, height, setSelectedPlace }) => {
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
      <div className='placesTitle'>Select place</div>
      {mockData.map((place) => (
        <PlaceSelection place={place} setSelectedPlace={setSelectedPlace} />
      ))}
    </div>
  );
};

export default Places;
