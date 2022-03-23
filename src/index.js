import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CodeColour from './Code_colour';
import Hint from './hint' ; 
import Prediction from './prediction' ; 
import Code from './code' ; 



const Index = () => {
  const rows = [1,2,3,4,5,6,7,8,9,10,11,12]
  const [color,setcolor] = useState("yellow") ; 
  const [color_code,setcolor_code] = useState({});
  const [hide,sethide] = useState(false); 
  const [hint,sethint] = useState([]) ; 
  const [restart,setrestart] = useState(false) ; 
  const [win,setwin] = useState(false); 
  const [count,setcount] = useState(0) ; 
  // console.log(color_code);
  // console.log(win) ; 

  const reset = () => {
    setwin(false) ; 
    setrestart(true) ; 
    setcount(0); 
  }
  useEffect(()=>{
    setrestart(false) ; 
    sethide(false); 
    
  },[restart]) ; 
  return (
    <React.StrictMode>
    <h1 className='headline'>Mastermind game</h1>
  <div className='main-bg'>
    <CodeColour setcolor = {setcolor}/>
    <Code color={color} color_code = {setcolor_code} sethide = {sethide} hide = {hide} restart = {restart}/>
    {hide && rows.map((element)=>{
        return (<Prediction color_code = {color_code} color={color} sethint={sethint} setwin = {setwin} restart = {restart} setcount={setcount} index = {element} count={count}/>)
    })}
    {(win || count === 12) && <div className='main-overlay'> 
    {win ? <h1>You won</h1> : <h1>Game Over</h1>}
    <button className='btn' onClick={() => reset()}>Play next game</button>
    </div>}


  </div>
  </React.StrictMode>
  )
}


ReactDOM.render(<Index/>,
  document.getElementById('root')
);

