import React,{useState} from 'react';
import './Contact.css'
function Contact(){

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[mobile,setMobile]=useState("");
const[comment,setComment]=useState("");

	
	const collectContactdata=async()=>{
	// console.log(name,email,password)
	let result=await fetch('http://localhost:4000/contacts',{
		method:"post",
		body:JSON.stringify({name,email,mobile,comment}),
		headers:{
			'Content-Type':'application/json'
		}
	});
	 result=await result.json()
	console.log(result);
	if(result){
		alert("Submit SuccessFully");
	}
	}
	return(
<div className="container-fluid bg-color_contact margin-padding_about ">
		<br /><br />
<div className="container contact">
<h1 className="games_heading">Contact Us</h1>
	<div className="row">
		<div className="col-md-3">
			<div className="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png"  className="cotact_image_msg" alt="..." />
				
      <p className="color_icon_location"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg><span className="glyphicon glyphicon-map-marker"></span> Jewar,India</p>
      <p className="color_icon_location"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
      <span className="glyphicon glyphicon-phone"></span> +91 7078216535</p>
      <p className="color_icon_location"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
<span className="glyphicon glyphicon-envelope"></span> nitin@gmail.com</p>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				<div className="form-group">
				  <label className="control-label col-sm-2">Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" placeholder="Enter First Name"  required value={name} onChange={(e)=>setName(e.target.value)} />
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" >Email:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control"  placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2">Mobile:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2">Comment:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="4"  value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
				  </div>
				</div>
				<br />
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-primary" onClick={collectContactdata}>Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>
<br />


</div>


		)
}
export default Contact;