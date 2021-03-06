import React, { useState } from 'react';
import Map from './components/Organisms/Map';
import Places from './components/Organisms/Places';

import './App.css';

function App() {
  const [selectedPlace, setSelectedPlace] = useState({
    lat: 59.95,
    lng: 30.33,
  });

  const [places, setPlaces] = useState([
    { lat: 59.95, lng: 40.33, title: 'aa' },
    { lat: 69.95, lng: 60.33, title: 'bb' },
    { lat: 79.95, lng: 40.33, title: 'cc' },
    { lat: 89.95, lng: 50.33, title: 'dd' },
    { lat: 59.95, lng: 30.33, title: 'ee' },
    { lat: 59.95, lng: 30.34, title: 'ff' },
  ]);
  return (
    <div className='Main'>
      <Places
        width={'30vw'}
        height={'100vh'}
        places={places}
        setPlaces={setPlaces}
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
      <Map
        width={'70vw'}
        height={'100vh'}
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
    </div>
  );
}

export default App;
