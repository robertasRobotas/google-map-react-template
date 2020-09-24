import React from 'react';
import Map from './components/Map';
import Places from './components/Places';

import './App.css';

function App() {
  return (
    <div className='Main'>
      <Places width={'30vw'} height={'100vh'} />
      <Map width={'70vw'} height={'100vh'} />
    </div>
  );
}

export default App;
