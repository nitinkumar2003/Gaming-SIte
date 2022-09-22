import './Login.css';
import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
function SignUp(){
	const[name,setName]=useState("");
	const[email,setEmail]=useState("");
	const[password,setPassword]=useState("");
	const navigate=useNavigate();





useEffect(()=>{
	const auth=localStorage.getItem('users');
	if(auth){
		navigate('/')
	}	
},[])

	


	const collectdata=async()=>{
	console.log(name,email,password)
	let result=await fetch('http://localhost:4000/signup',{
		method:"post",
		body:JSON.stringify({name,email,password}),
		headers:{
			'Content-Type':'application/json'
		}
	});
	 result=await result.json()
	console.log(result);
	if(result){
		localStorage.setItem("users",JSON.stringify(result))
		navigate('/')
	
		}
	}

	return(
    <div className="container-fluid bg-dark background-image ">
<div className="row ">

 
 
<div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">

    <div className="card p-3 text-center py-4 margin-padding">
    <h2 className="NavVideo_h_color_news">SignUp</h2>
        <div> <img src="https://clipground.com/images/clipart-profile-6.jpg" className="Login_logo_men" width="70" alt="icon" /> </div>
        <div className="px-sm-4 mt-3 px-3">
         <input className="form-control" type="text" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} /> 
                  
        <input className="form-control mt-3" type="email" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)} />
         <input className="form-control mt-3"type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
         
          </div>
          
        <div className="px-5 mt-4"> <button className="btn btn-secondary w-50 text-uppercase" onClick={collectdata}>SignUp</button> </div>
        <div className="px-5 mt-4"> <button className="btn btn-secondary w-50 text-uppercase"><Link to="/login" className="login_register_now">Login</Link></button> </div>
        
    </div>

  </div>
</div>
	

</div>


		)
}
export default SignUp;