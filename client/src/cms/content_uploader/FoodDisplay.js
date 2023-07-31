import React from 'react';
import ContentDisplay from './ContentDisplay';
import ItemEdit from './ItemEdit';

const FoodDisplay = () => {
  return (
    <ContentDisplay
      endpoint="http://localhost:3001/food"
      objectType="Food"
      editComponent={ItemEdit}
    />
  );
};

export default FoodDisplay;
