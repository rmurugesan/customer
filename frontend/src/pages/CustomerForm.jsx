import { useState, useEffect } from "react";
import API from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function CustomerForm() {
  const { id } = useParams(); // if id exists => edit mode
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    mobile: "",
    tier: "Silver",
    branch_id: localStorage.getItem("branch_id") || "",
  });

  // Load existing customer for edit
  useEffect(() => {
    if (id) {
      API.get(`/customers/${id}`).then((res) => {
        setCustomer(res.data);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await API.put(`/customers/${id}`, customer);
        alert("Customer updated successfully");
      } else {
        await API.post("/customers", customer);
        alert("Customer added successfully");
      }

      navigate("/customers");
    } catch (err) {
      alert("Error saving customer");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>{id ? "Edit Customer" : "Add Customer"}</h2>

      <form onSubmit={handleSubmit} className="customer-form">
        <input
          type="text"
          placeholder="Customer Name"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="mobile"
          value={customer.mobile}
          onChange={(e) => setCustomer({ ...customer, mobile: e.target.value })}
          required
        />

        <label>Segmentation Tier</label>
        <select
          value={customer.tier}
          onChange={(e) => setCustomer({ ...customer, tier: e.target.value })}
        >
          <option value="Prime">Prime</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
        </select>

        <button type="submit">{id ? "Update" : "Add"} Customer</button>
      </form>
    </div>
  );
}
