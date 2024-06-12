import React, { useState } from 'react'

type PropsType = {
    name : string
}

export default function Children( {name}: PropsType) {
   const [count , setCount] = useState(0); // destructoring 
  return (
    <div>
      <p>{name}</p>
      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}>tăng</button>
    </div>
  )
}
