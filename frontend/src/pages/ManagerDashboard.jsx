import React, { useEffect, useState } from 'react';
import API from "../services/api";

function ManagerDashboard() {

const [customers,setCustomer] = useState([]);



useEffect(() => {
    // Use a reference or a simple variable outside the async function
    let ignore = false; 

    const loadCustomers = async () => {
        const res = await API.get("/customers");
        
        // Only update state if we haven't been asked to ignore the result
        if (!ignore) {
            console.log(res.data);
            setCustomer(res.data);
        }
    };

    loadCustomers();
    
    // Cleanup: Set ignore to true when the component unmounts
    return () => {
        ignore = true;
    };
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