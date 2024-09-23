import React, { useState, useEffect } from 'react';
 import ButtonComponent from './ButtonComponent';
 import axios from 'axios'
export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const [apidata, setApidata] = useState({});

  const handleClick = () => {
    console.log("clicked");
    setText(text.toUpperCase());
  };
  const callInsert =(fname, name)=>{
    alert(fname)
    alert(name)
    let fd =new FormData()
     fd.append("fname",fname)
     fd.append("name",name)
   axios({
    method:'post',
    url:'http://127.0.0.1:5000/insertData',
    data:fd,
    headers: {
      'Content-Type': 'multipart/form-data',  // Since we're sending FormData
    },
   }).then((response)=>{
     alert(response.data.msg)
   })

  }
  

  // useEffect(() => {
  //   fetch("/userDetails/123")
  //     .then(res => 
  //       res.json()
  //     )
  //     .then(apidata => {
       
  //       setApidata(apidata);
  //       console.log(apidata)
        
  //     })
  // }, [])

  const callData = () => {
   alert("ok")
    axios({
     method:"GET",
     url:"http://127.0.0.1:5000/userDetails/123"
    }).then((response) => {
      alert(response.data.fname)
      setApidata(response.data)
     
    })
   }

  
  
  

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <>
      <div className="container mb-3">
        <h1>{props.heading} -- {apidata?.fname || "payalno data"}</h1>
        <textarea className="form-control" onChange={handleOnChange} value={text} id="txtArea" rows="8"></textarea>
      </div>

      <ButtonComponent tt="Convert To Upper case" onSubmit={handleClick} />

      <div className="container">
        <h1>Word Summary</h1>
        <p>{text.length} characters {wordCount} words</p>
        <p>{0.008 * text.length} Minutes required</p>
      </div>
      <button className="btn btn-success" onClick={()=>{callInsert(apidata?.fname,apidata?.name)}}>Send Response </button> 
      <button className="btn btn-success" onClick={callData}>Send Response </button> 
    </>
  );
}
