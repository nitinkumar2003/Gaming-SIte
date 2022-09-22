import './Login.css';
import React,{useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
function UpdateCom(){
	const[name,setName]=useState("");
	const[email,setEmail]=useState("");
	const[password,setPassword]=useState("");
    const params=useParams();
    const navigate=useNavigate();
	

    useEffect(()=>{
        getUserDetails();
    },[])
    const getUserDetails=async()=>{
         console.log(params)
         let result=await fetch('http://localhost:4000/dashboard/'+params.id);
         result =await result.json();
         setName(result.name);
         setEmail(result.email);
         setPassword(result.password);

    }

const UpdateData=async()=>{
	console.log(name,email,password)
    let result=await fetch('http://localhost:4000/dashboard/'+params.id,{
        method:'Put',
        body:JSON.stringify({name,email,password}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    result=await result.json();
    console.log(result)
    navigate('/')
}


	return(
    <div className="container-fluid bg-dark background-image ">
<div className="row ">

 
 
<div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">

    <div className="card p-3 text-center py-4 margin-padding">
    <h2 className="NavVideo_h_color_news">update</h2>
        <div> <img src="https://clipground.com/images/clipart-profile-6.jpg" className="Login_logo_men" width="70" alt="icon" /> </div>
        <div className="px-sm-4 mt-3 px-3">
         <input className="form-control" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} /> 
        <input className="form-control mt-3" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)} />
         <input className="form-control mt-3" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
         
          </div>
          
        <div className="px-5 mt-4"> <button className="btn btn-secondary w-50 text-uppercase" onClick={UpdateData}>Update</button> </div>
        
        
    </div>

  </div>
</div>
	

</div>


		)
}
export default UpdateCom;