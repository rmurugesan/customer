import React, { useEffect, useState } from 'react';
import API from "../services/api";

function ManagerDashboard() {

const [customers,setCustomer] = useState([]);



useEffect(() => {
    const loadCustomers = async () => {
        const res = await API.get("/customers");
        console.log(res.data);
        setCustomer(res.data);
    };

    loadCustomers();

}, []);

  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      <h1>📊 Manager Panel</h1>
      <p>This page is restricted to users with the **Manager** role or higher.</p>
      <ul>
        <li>View Team Performance</li>
        <li>Approve Time-Off Requests</li>

        {customers.map((customer) => (
          // Use a unique key for each list item (assuming 'id' exists)
          <li key={customer.id}>
            <strong>{customer.name || 'N/A'}</strong> - Email: {customer.email || 'N/A'}
          </li>
        ))}
        
      </ul>
      
    </div>
  );
}

export default ManagerDashboard;