import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => { if (!res.ok) throw new Error('API call failed'); return res.json(); })
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p className="loading">Fetching users from API...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  return (
    <div>
      <h2>🌐 Users from JSONPlaceholder API</h2>
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
export default UserList;
