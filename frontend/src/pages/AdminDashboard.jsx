import React from 'react';

function AdminDashboard() {



  return (
    <div style={{ padding: '20px', border: '2px solid red' }}>
        

      <h1>👑 Admin Dashboard</h1>  
      <p>This page is restricted to users with the **Admin** role.</p>
      <ul>
        <li>Full User Management</li>
        <li>System Configuration</li>
      </ul>
    </div>
  );
}

export default AdminDashboard;