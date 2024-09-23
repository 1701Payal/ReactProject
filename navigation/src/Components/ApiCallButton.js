import React from 'react'

function ApiCallButton() {
    const call =(fname, name)=>{
      let fd =new FormData()
       fd.append("fname",fname)
       fd.append("name",name)

    }
  return (
    <div>
    
   </div>
  )
}

export default ApiCallButton
