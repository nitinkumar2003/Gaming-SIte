import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

function Nav(){
  const auth=localStorage.getItem('users');
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
    
  }
	return(

<div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top ">
  <div className="container-fluid">
    <span className="navbar-brand navbar-heading_GAMING">GAMING</span>
    <span className="navbar-brand"></span>
    <button to="/userprofile" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
    {auth?
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-center">
           <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/games">Games</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admindashboard">Dashboard</Link>
        </li>
            <li className="nav-item">
            <Link className="nav-link" to="/signup" onClick={logout}>logout</Link>
          {/*<Link className="nav-link active" to="/signup" onClick={logout}>Logout({JSON.parse(auth).name})</Link>*/}
        </li>
        
        
      </ul>
     : <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-center">
           <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
         <li className="nav-item">
          <button className="btn btn-primary " type="button"><Link to="/login" className="text-white">Login</Link></button>
        </li>
        </ul>
      }
    </div>
  </div>
</nav>
</div>

		)
}
export default Nav;