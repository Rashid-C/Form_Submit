import React, { useState } from "react";

function Counter() {
  const [showCount, setShowCount] = useState(false);
  const [count, setCount] = useState(0);
  const [text,setText]=useState('')
  return (
    <div style={{ display: "flex", justifyContent: "center",flexDirection:'column',alignItems:'center' }}>
        <input type="text" onChange={(e)=>setText(e.target.value)} />
      <button onClick={() => setShowCount(!showCount)}>
        {showCount ? "Hide Your Counter ?" : " Show your Counter  "}
      </button>
      {showCount ? (
        <>
          <h4 style={{ display: "flex", justifyContent: "center" }}>This is the Conter</h4>
          <p style={{ display: "flex", justifyContent: "center" }}>Count: {count}</p>
          
          <button  onClick={() => setCount(count + 1)}>click me</button>
          <button onClick={()=>setCount(count-1)}>{count>0?'Decrement':''}</button>
          <h6>{text}</h6>
        </>
      ) : null}
    </div>
  );
}

export default Counter;
