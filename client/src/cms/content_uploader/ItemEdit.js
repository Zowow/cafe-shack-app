import React, { useState } from 'react';
import axios from 'axios';

const ItemEdit = ({ item, onUpdate, objectType, showUploaderC }) => {
    const [name, setName] = useState(item.name);
    const [selectedFile, setSelectedFile] = useState(null);
    const [filename, setFilename] = useState('');
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setFilename(event.target.files[0].name);
    };

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('filename', filename);
        if (selectedFile) {
            formData.append('image', selectedFile);
        }

        const response = await axios.put(`http://localhost:3001/${objectType}/${item.id}`, formData);
        setMessage(response.data.message);
        onUpdate();
        } catch (error) {
        console.error('Error updating image:', error);
        setMessage(`Failed to update ${objectType}`);
        }
    };


    return (
        <div className="cms-food">
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="cms-food-form">
            <h1>{objectType} Editor</h1>
            <div className="cms-food-data">
            <label htmlFor="name">Display Name:</label>
            <input
                className="f-dname"
                type="text"
                id="name"
                value={name}
                onChange={handleInputChange}
                required
            />
            </div>
            <div className="cms-food-data">
            <label htmlFor="image">Select Image:</label>
            <input type="file" id="image" onChange={handleFileChange} />
            </div>
            <button type="submit" className="cms-food-button">
            Update
            </button>
            </form>
            <p>{message}</p>
            </div>
    );
};

export default ItemEdit;
