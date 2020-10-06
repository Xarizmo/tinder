import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.scss'

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Steve Jobs',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Steve_Jobs_WWDC07.jpg/1200px-Steve_Jobs_WWDC07.jpg'
    },
    {
      name: 'Elon Mask',
      url: 'https://images.hindustantimes.com/tech/img/2020/10/02/960x540/b0bfeba8-fdb6-11ea-ac4b-eb925e09bde9_1601639441493_1601639470519.jpg'
    }
  ]);
  
  return (
    <div className='tinderCards'>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;