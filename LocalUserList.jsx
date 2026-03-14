import React, { useState, useEffect } from 'react';

const LocalUserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/users.json')
      .then(res => { if (!res.ok) throw new Error('Failed to load'); return res.json(); })
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p className="loading">Loading local users...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  return (
    <div>
      <h2>📁 Local Users (from users.json)</h2>
      {users.map(u => (
        <div className="card" key={u.id}>
          <h3>{u.name}</h3>
          <p>📧 {u.email}</p>
          <p>📞 {u.phone}</p>
        </div>
      ))}
    </div>
  );
};
export default LocalUserList;
