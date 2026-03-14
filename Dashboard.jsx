import React, { useState } from 'react';
import LocalUserList from './LocalUserList';
import UserList from './UserList';
import FakePostList from './FakePostList';

const Dashboard = () => {
  const [active, setActive] = useState('home');
  return (
    <div>
      <h1>📡 FSAD API Integration Dashboard</h1>
      <nav className="nav">
        <button className={active==='home'?'active':''} onClick={()=>setActive('home')}>🏠 Home</button>
        <button className={active==='local'?'active':''} onClick={()=>setActive('local')}>📁 Local Users</button>
        <button className={active==='api'?'active':''} onClick={()=>setActive('api')}>🌐 Users API</button>
        <button className={active==='fake'?'active':''} onClick={()=>setActive('fake')}>🛒 Fake API Posts</button>
      </nav>
      <div className="content">
        {active==='home' && (
          <div className="card">
            <h2>Welcome to Skill 11 - React API Integration</h2>
            <p>Click on the buttons above to explore:</p>
            <p>📁 <b>Local Users</b> - Fetched from local JSON file using fetch()</p>
            <p>🌐 <b>Users API</b> - Fetched from JSONPlaceholder public API using fetch()</p>
            <p>🛒 <b>Fake API Posts</b> - Fetched from DummyJSON using axios with filter</p>
          </div>
        )}
        {active==='local' && <LocalUserList />}
        {active==='api' && <UserList />}
        {active==='fake' && <FakePostList />}
      </div>
    </div>
  );
};
export default Dashboard;
