import React, { useState } from 'react';

import data from './data';

import List from './components/List';

function App() {
  const [dogs, setDogs] = useState(data);
  console.log(dogs);

  return (
    <main>
      <section className='container'>
        <List dogs={dogs} />
        <button onClick={() => setDogs([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
