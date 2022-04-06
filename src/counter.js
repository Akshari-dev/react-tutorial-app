import React, { useState } from "react";


function Counter(){
    const[num, setNum]=useState(1)
    

    return(<>
    <h1>{num}</h1>
    <button onClick={()=>{ setNum(num*2)}}>ADD</button>
    <button onClick={()=>{setNum((num*0)+1)}}>RESET</button>
    </>)

}

export default Counter;

