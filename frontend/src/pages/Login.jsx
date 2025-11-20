import { useState } from "react";
import { Navigate } from 'react-router-dom';


import API from "../services/api";
import Home from "./Home";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//  const navigate = useNavigate();
  
const token = localStorage.getItem('token');
  if(token) { 
  return (<>
    <Navigate to='/home'/>
   </>) }


  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "admin") {
        window.location.href = "/admin";
        // return <Navigate to="/admin"  />
      } else {
        window.location.href = "/manager";
        // return <Navigate to="/manager"  />

      }
    } catch (err) {
      alert(err.response.data.error);
    }
  }



  return (
    <>
    <div>
    <div class="row justify-content-center align-items-center ">
        <div class="col-md-6 col-lg-4">
            {/* START OF FORM CARD */}
            <div class="card shadow-lg p-4">
                <div class="card-body">
                    <h3 class="card-title text-center mb-4">Login</h3>
    
      <form onSubmit={login}>
        <input 
          type="email" 
          placeholder="Email"
          class="form-control"
          onChange={(e) => setEmail(e.target.value)}
        /><br/>

        <input 
          type="password"
          placeholder="Password"
          class="form-control"
          onChange={(e) => setPassword(e.target.value)}
        /><br/>

          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        
      </form>
      </div>
        <a href="/signup" > Signup </a>
            </div>
            {/* END OF FORM CARD */}
       
        </div>
    </div>
</div>
  
    </>

  );
}
