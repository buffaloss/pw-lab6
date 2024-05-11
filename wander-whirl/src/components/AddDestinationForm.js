import React, { useState } from 'react';

function AddDestinationForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, rating, image });
    setTitle('');
    setDescription('');
    setRating('');
    setImage('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          <label>Rating:</label>
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required />
          <label>Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
          <button type="submit">Add Destination</button>
        </form>
      </div>
    </div>
  );
}

export default AddDestinationForm;
