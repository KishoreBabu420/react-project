import React, { useState } from 'react';

import people from '../data';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const randomUser = () => {
    const randomIndex = Math.floor(Math.random() * people.length);

    setIndex(randomIndex);
  };

  const prevPerson = () => {
    if (index === 0) {
      setIndex(people.length - 1);
      return;
    } else {
      setIndex(index - 1);
    }
  };

  const nextPerson = () => {
    if (index === people.length - 1) {
      setIndex(0);
      return;
    } else {
      setIndex(index + 1);
    }
  };

  setInterval(() => {
    nextPerson();
  }, 1000);

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='student' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='btn-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button className='btn' onClick={randomUser}>
        Random User
      </button>
    </article>
  );
};

export default Review;
