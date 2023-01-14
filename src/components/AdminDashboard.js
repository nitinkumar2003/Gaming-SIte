import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'


const AdminDashboard=()=>{
	const[user,setUser]=useState([]);
  
  useEffect(()=>{
 getDataDashboard();
    },[])



const getDataDashboard=async()=>{
  fetch(
      "http://localhost:4000/dashboard"
    )
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        }
      })
      .then((data) => {
        setUser(data);
      });
}	

  const deleteDashboardData=async(id)=>{
    let result= await fetch('http://localhost:4000/dashboard/'+id,{
      method:'DELETE',
      headers:{
         'Accept': 'application/json',
                        'content-Type': 'application/json'
      }
    })
    result=await result.json();
    if(result){
      alert("deleted");
      getDataDashboard();
    }

  }


const searchHandle=async(event)=>{
  let key=event.target.value;
  if(key){
    let result = await fetch('http://localhost:4000/search/'+key);
  result = await result.json();
  if(result){
    setUser(result)
    }
  }else{
    getDataDashboard();
  }
}

	  
	return(
		<div className="container-fluid">
    <br /><br /><br />
<h1>User Details</h1>
<input type="text" className="admin_dasboard_search_box"
onChange={searchHandle}
 placeholder="serch User" /><br /><br />

<table className="table  table-bordered table-striped ">

  <thead>
    <tr className="table-dark">
      <th scope="col">S.No.</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
  {user.length>0 ? user.map((data)=>{
  	return(
 <tbody key={data._id}>
    <tr>
      <th scope="row">{data._id}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.password}</td>
      <td><button onClick={()=>deleteDashboardData(data._id)}>Delete</button>
      <Link to={"/updateCom/"+data._id} >Edit</Link>
      </td>
    </tr>
  </tbody>  
   		)
  })
:<h1>No Result Found</h1>}
 
</table>
</div>


		)
}
export default AdminDashboard;