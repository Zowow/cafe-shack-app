import React from 'react';
import ImageUploader from './ImageUploader';

const Etc = () => {
  return (
    <ImageUploader
      endpoint="http://localhost:3001/etc"
      onUpdate={() => {}}
      objectType="Etc"
    />
  );
};

export default Etc;
