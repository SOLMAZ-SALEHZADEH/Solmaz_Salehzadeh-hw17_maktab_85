import React,{useState} from 'react'
import "./style.css"
function Question6
() {
    const [count, setCount] = useState(0)
  return (
    <div className="counterContainer">
        <button className="plus" onClick={()=>setCount(count+1)}>+</button>
        <p>{count}</p>
        <button className="minus" onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default Question6
