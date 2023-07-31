import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = ({ endpoint, onUpdate, objectType }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState('');
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
        formData.append('image', selectedFile);

        const response = await axios.post(endpoint, formData);
        setMessage(response.data.message);
        onUpdate();
      } catch (error) {
        console.error('Error uploading image:', error);
        setMessage(`Failed to upload ${objectType}`);
      }
    };

    return (
      <div className="cms-food">
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="cms-food-form">
          <h1>{objectType} Uploader</h1>
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
            <input type="file" id="image" onChange={handleFileChange} required />
          </div>
          <button type="submit" className="cms-food-button">Upload</button>
        </form>
        <p>{message}</p>
      </div>
    );
  };

export default ImageUploader;
