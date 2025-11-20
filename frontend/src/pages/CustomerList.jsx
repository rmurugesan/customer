import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

//   const role = localStorage.getItem("role");
//   const branchId = localStorage.getItem("branch_id");

 

  useEffect(() => {
     const loadData = async () => {
    const res = await API.get("/customers");
    setCustomers(res.data);
  };
  
    loadData();
  }, []);

  return (
    <div className="container">
      <h2>Customer List</h2>

      <Link className="add-btn" to="/customers/add">+ Add Customer</Link>

      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>mobile</th>
            <th>Tier</th>
            <th>Branch</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.mobile}</td>

              <td>
                <span className={`tier-tag tier-${c.tier.toLowerCase()}`}>
                  {c.tier}
                </span>
              </td>

              <td>{c.branch_id}</td>

              <td>
                <Link to={`/customers/edit/${c.id}`} className="edit-btn">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
