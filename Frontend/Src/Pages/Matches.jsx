import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Matches() {
  const { id } = useParams();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/items/match/${id}`)
      .then(res => setMatches(res.data));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">AI Matches</h2>
      {matches.map((m, i) => (
        <div key={i} className="border p-4 mt-4">
          <h3>{m.item.title}</h3>
          <p>{(m.score * 100).toFixed(0)}% match</p>
        </div>
      ))}
    </div>
  );
}
