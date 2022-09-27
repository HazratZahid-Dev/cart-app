import React, { useState } from 'react'

const More = () => {
    const [Mode,setMode]=useState(false);
  return (
    <>
    <div style={Mode }>
        <button onClick={()=>setMode(!Mode)}></button>
    </div>
      
    </>
  )
}

export default More
