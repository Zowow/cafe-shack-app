import React from 'react';
import ImageUploader from './ImageUploader';

const Food = () => {
  return (
    <ImageUploader
      endpoint="http://localhost:3001/food"
      onUpdate={() => {}}
      objectType="Food"
    />
  );
};

export default Food;
