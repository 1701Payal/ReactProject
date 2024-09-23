import React, { useState,useEffect } from 'react'
import axios from 'axios'
export default function Display() {
    const [getData,setData]=useState([])
    useEffect(() => {
        ApiGetData();
    }, []);
    
    const  ApiGetData = () =>{
       
       axios({
        url:"http://127.0.0.1:5000/alluser",
        method:"post",
    
        headers: { 'Content-Type': 'application/json' }
       }).then((response)=>{
        alert(JSON.stringify(response.data))
        setData(response.data.users)
       })
    }
 
  return (
    <div>
        <button type="submit" className="btn btn-primary" onClick={ApiGetData}>Submit</button>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
    </tr>
  </thead>
  <tbody>
  {getData.length>0?(

    getData.map((getData,index) => (
        <tr key={getData.id}>
        <th scope="row">{index+1}</th>
        <td>{getData.email}</td>
        <td>{getData.firstname}</td>
        <td>{getData.lastname}</td>
      </tr>
    ))
    
  ):(
    <tr >
          <td colSpan={4}>"No data found"</td>
        </tr>
  )
    
  }
    
    
  </tbody>
</table>
    </div>
  )
}
