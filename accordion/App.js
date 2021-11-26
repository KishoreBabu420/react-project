import React, { useState } from 'react';
import data from './data';

import SingleQuestion from './components/Question';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Frequently Asked Questions</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion {...question} key={question.id} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
