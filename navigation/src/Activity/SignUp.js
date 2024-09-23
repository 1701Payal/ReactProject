import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
  const [uname,setname]=useState()
  const [uemail,setemail]=useState()

  const [upwd,setpwd]=useState()
  const [uradio,setRadio]=useState()
  const [utm,setTm]=useState()
  const [getdd,setdd]=useState()
  const [getchk,setchk]=useState()

  const navigate = useNavigate(); 
const onSubmit = (e) =>{
  e.preventDefault();
// alert(uname)
// alert(uemail)
// alert(upwd)
// alert(uradio)
// alert(utm)
// alert(getdd)
alert(getchk)
let fd =new FormData()
fd.append("sname",uname)
fd.append("lname",uemail)
fd.append("fname","ramesh")
fd.append("email","f@y.com")
fd.append("pwd","123")

axios({
method:'post',
url:'http://127.0.0.1:5000/insertData',
data:fd,
headers: {
 'Content-Type': 'multipart/form-data',  // Since we're sending FormData
},
}).then((response)=>{
alert(response.data.msg)
navigate('/login'); 
})

}
  return (
    <>
     <h1>Sign Up</h1>
     <div className="mb-3">
    <label htmlFor="name" className="form-label">Enter Your full name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={(e) => setname(e.target.value)} value={uname}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setemail(e.target.value)}} value={uemail}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setpwd(e.target.value)} value={upwd}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e=>setchk(e.target.value))}/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <div className="form-check-inline">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="male" onChange={e=> setRadio(e.target.value)}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  Male
  </label>
</div>
<div className="form-check-inline">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="female"  onChange={e=> setRadio(e.target.value)}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    female
  </label>
</div>
<div class="form-check form-switch">
  <input className="form-check-input" type="checkbox"  role="switch" id="flexSwitchCheckDefault" onChange={(e=>setTm(e.target.checked))}/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
  { getdd || 'Select District' }
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" onClick={() =>{ setdd('Kolkata')}} href="#">Kolkata</a></li>
    <li><a class="dropdown-item" onClick={() =>{ setdd('Bangalore')}} href="#">Bangalore</a></li>
    <li><a class="dropdown-item"  onClick={() =>{ setdd('GOA')}} href="#">GOA</a></li>
  </ul>
</div>
<div className='form-check my-5'>
  <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
  </div>
</>
  )
}
