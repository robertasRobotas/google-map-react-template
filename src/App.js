import React, { useState } from 'react';
import Map from './components/Organisms/Map';
import Places from './components/Organisms/Places';

import './App.css';

function App() {
  const [selectedPlace, setSelectedPlace] = useState({
    lat: 59.95,
    lng: 30.33,
  });
  return (
    <div className='Main'>
      <Places
        width={'30vw'}
        height={'100vh'}
        setSelectedPlace={setSelectedPlace}
      />
      <Map width={'70vw'} height={'100vh'} selectedPlace={selectedPlace} />
    </div>
  );
}

export default App;
