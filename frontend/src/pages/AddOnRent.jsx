import React, { useState } from 'react';
import Image from "../assets/Tool.png";

function AddOnRent() {
  const [toolName, setToolName] = useState('');
  const [tillDate, setTillDate] = useState('');
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Send form data to server
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h1>Product Form</h1>
        <div className="image-section">
          <img src={Image} alt="Product Image" />
        </div>
        <div className="product-info">
          <label htmlFor="tool-name">Tool Name:</label>
          <input type="text" id="tool-name" name="tool-name" value={toolName} onChange={(event) => setToolName(event.target.value)} required />

          <label htmlFor="date">Till Date:</label>
          <input type="date" id="date" name="date" value={tillDate} onChange={(event) => setTillDate(event.target.value)} required />

          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={price} onChange={(event) => setPrice(event.target.value)} required />

          <label htmlFor="tags">Tags:</label>
          <input type="text" id="tags" name="tags" value={tags} onChange={(event) => setTags(event.target.value)} className="tags" required />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>

          <input type="submit" value="Post" />
        </div>
      </form>
    </div>
  );
}

export default AddOnRent;
