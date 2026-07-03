import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Report() {
  const [data, setData] = useState({});
  const nav = useNavigate();

  const submit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/items', data);
    nav(`/matches/${res.data._id}`);
  };

  return (
    <form onSubmit={submit} className="p-10 max-w-md mx-auto">
      <select onChange={e => setData({ ...data, type: e.target.value })}>
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select>
      <input placeholder="Title" onChange={e => setData({ ...data, title: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setData({ ...data, description: e.target.value })} />
      <input placeholder="Category" onChange={e => setData({ ...data, category: e.target.value })} />
      <input placeholder="Location" onChange={e => setData({ ...data, location: e.target.value })} />
      <button className="bg-green-600 text-white p-2 mt-4">Submit</button>
    </form>
  );
}
