import React from 'react';
import ImageUploader from './ImageUploader';

const Drink = () => {
  return (
    <ImageUploader
      endpoint="http://localhost:3001/drink"
      onUpdate={() => {}}
      objectType="Drink"
    />
  );
};

export default Drink;
