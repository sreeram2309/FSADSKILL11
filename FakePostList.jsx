import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FakePostList = () => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  const fetchData = () => {
    setLoading(true);
    axios.get('https://dummyjson.com/posts?limit=15')
      .then(res => { setPosts(res.data.posts); setFiltered(res.data.posts); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  };

  useEffect(() => { fetchData(); }, []);

  useEffect(() => {
    if (filter === 'all') setFiltered(posts);
    else setFiltered(posts.filter(p => p.userId === Number(filter)));
  }, [filter, posts]);

  if (loading) return <p className="loading">Fetching posts from DummyJSON...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  return (
    <div>
      <h2>🛒 Posts from DummyJSON (axios)</h2>
      <div>
        <label>Filter by User ID: </label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All Users</option>
          {[1,2,3,4,5].map(i => <option key={i} value={i}>User {i}</option>)}
        </select>
        <button className="refresh-btn" onClick={fetchData}>🔄 Refresh</button>
      </div>
      {filtered.map(p => (
        <div className="card" key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          <p><small>👤 User ID: {p.userId}</small></p>
        </div>
      ))}
    </div>
  );
};
export default FakePostList;
