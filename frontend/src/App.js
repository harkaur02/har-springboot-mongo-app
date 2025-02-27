import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const addItem = () => {
    axios.post('http://localhost:8080/api/items', { name, description })
      .then(res => setItems([...items, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}: {item.description}</li>
        ))}
      </ul>
      <h2>Add Item</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default App;

