"use client"
import React from 'react';

const Gallery = () => {
  const images = [
    'Enter the url',
    'https://placekitten.com/300/200',
    
  ];

  return (
    <div style={styles.container}>
      <h1 className='mt-20 font-semibold underline text-2xl ' style={styles.heading}>Gallery</h1>
      <div style={styles.gallery}>
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} style={styles.image} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Gallery;
