import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ question, answer }) => {
  const [isShowInfo, setIsShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{question}</h4>
        <button className='btn' onClick={() => setIsShowInfo(!isShowInfo)}>
          {isShowInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
h2.c
      {isShowInfo && <p>{answer}</p>}
    </article>
  );
};

export default Question;
