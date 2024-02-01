import React, { useState } from 'react'
import Btn from "./Btn";
import Historya from './Historya';
import { useNavigate } from 'react-router-dom';

function Historybtn() {
    const [render, setRender] = useState(false)
    let msg
    if(render){
         msg =  "Hide History"
      }else{
         msg =  "Show History"
      }

    const handleClick = () => {
      setRender((prev)=>!prev);
      };
 
     

  return (
    <>
    <Btn click={handleClick} child = {msg}> </Btn>
    {render && <Historya/> }
    </>
  )
}

export default Historybtn