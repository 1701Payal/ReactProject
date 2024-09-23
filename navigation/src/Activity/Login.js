import React, { useState } from 'react'

export default function Login() {
  const [getData,setData]=useState({
    email:"",
    password:""
  }
  )
  const onchange = (e) => {
    const { name, value } = e.target;
    setData({ ...getData, [name]: value });
  };
  const insertData = () =>{
    alert(JSON.stringify(getData))
  }
  return (
    <>
    <form  onSubmit={insertData}>
     <h1>Login </h1>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={onchange}  />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  name="password" onChange={onchange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
  </form>
</>
  )
}
