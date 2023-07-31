import React from 'react';
import ContentDisplay from './ContentDisplay';
import ItemEdit from './ItemEdit';

const EtcDisplay = () => {
    return (
        <ContentDisplay
        endpoint="http://localhost:3001/etc"
        objectType="Etc"
        editComponent={ItemEdit}
        />
    );
};

export default EtcDisplay;
