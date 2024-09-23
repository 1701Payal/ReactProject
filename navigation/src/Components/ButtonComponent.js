import React from 'react'

export default function ButtonComponent({tt,onSubmit}) {

    const  handleclick = () => {
        console.log("clicked");
        onSubmit();
        }
      
  return (
    <div>
     <button className="btn btn-primary" onClick={handleclick}>{tt} </button> 
    </div>
  )
}
