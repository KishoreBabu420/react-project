import React, { useState, useEffect } from 'react';

import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsloading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);

    setTours(updatedTours);
  };

  const FetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsloading(false);
      setTours(tours);
    } catch (error) {
      setIsloading(false);
    }
  };

  useEffect(() => {
    FetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Yours Available</h2>
          <div className='underline'></div>
        </div>
        <button className='btn btn-refresh' onClick={() => FetchTours()}>
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
