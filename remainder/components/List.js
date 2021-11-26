import React from 'react';

const List = ({ dogs }) => {
  return (
    <>
      <h3>{dogs.length} birthdays today</h3>
      {dogs.map((dog) => {
        const { id, name, age, image } = dog;
        return (
          <article key={id} className='dog'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <span role='img'>X</span>
          </article>
        );
      })}
    </>
  );
};

export default List;
