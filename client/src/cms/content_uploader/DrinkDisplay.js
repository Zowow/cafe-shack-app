import React from 'react';
import ContentDisplay from './ContentDisplay';
import ItemEdit from './ItemEdit';

const DrinkDisplay = () => {
    return (
        <ContentDisplay
        endpoint="http://localhost:3001/drink"
        objectType="Drink"
        editComponent={ItemEdit}
        />
    );
};

export default DrinkDisplay;
