import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Home() {

 const navigate = useNavigate();

const token = localStorage.getItem('token');
if(!token) { navigate ('/login') }

  return (
    <>
    <h2> Home  -Dashboard </h2>
     
    </>
  );
}

export default Home;