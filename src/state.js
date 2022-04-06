import React, {useState} from "react";


function State(){
    var [name, setname]=useState("Shrikant");

function changename(){
     setname("Chincholkar")
}


    return(<>
    <h1>{name}</h1>
    <button  onClick={changename}>CLICK TO CHANGE</button>
    
    </>)
}
export default State;