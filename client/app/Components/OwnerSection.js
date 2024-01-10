// OwnerSection.js

import React from 'react';
import Image from 'next/image';

const ownersData = [
  {
    id: 1,
    name: 'Owner 1',
    src: require('../assets/image/car.webp'), // Replace with your image path
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Owner 2',
    src: require('../assets/image/car.webp'), // Replace with your image path
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    name: 'Owner 3',
    src: require('../assets/image/car.webp'), // Replace with your image path
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const OwnerSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        maxWidth: '2000px',
        margin: '0 auto',
      }}
    >
      {ownersData.map((owner) => (
        <div
          key={owner.id}
          style={{
            textAlign: 'center',
            margin: '30px',
          }}
        >
          <Image
            src={owner.src}
            alt={owner.name}
            width={150}
            height={150}
            objectFit="cover"
            className="rounded-full ml-20"
          />
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}
          >
            {owner.name}
          </h3>
          <p style={{ fontSize: '0.9rem' }}>{owner.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OwnerSection;
