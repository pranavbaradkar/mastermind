import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './prediction.css' ; 
import Hint from './hint' ; 


const Prediction = (props) => {
    const gcode = [...props.color_code] ; 
    const [check,setcheck] = useState(false) ; 
    const [count,setcount] = useState(0) ; 
    const [colors,setcolors] = useState([
        {
         id : 1,
         color : "white"
        },
        { 
          id : 2,
          color : "white"
        },
        {
          id : 3,
          color : "white"  
        },
        {
          id : 4,
          color : "white"
        },
    ]) ; 
    const [hint,sethint] = useState([-1,-1,-1,-1]); 
    
    useEffect(()=> {
        if (props.restart) {
          let newColors = [...colors] ; 
          newColors = colors.map((element)=>{
              return (
                     {...element,color:"white"}
              )}); 
          //newColors[index] = {...newColors[index],color:"white"}
          setcolors(newColors) ; 
          sethint([-1,-1,-1,-1]) ; 
        }
      },[]) ;    

    useEffect(()=> {
        // console.log(colors) ; 
    },[colors]) ;  

    useEffect(() => {
        if (count === 0) {
            return ; 
        }
        // console.log(gcode) ; 
        // let status = gcode.find((element,index) => element.color === nele.color) ; 
      const mySet1 = new Set() ; 
      const newArray = colors.map((nele,index)=>{ 
          let status = gcode[nele.id - 1].color === nele.color; 
          if (status) {
              mySet1.add(index) ; 
              return 1 ; 
          }
          return 0 ; 
      }) ; 
      let temp = [...newArray] ; 
      for (let index in newArray) {
          if (newArray[index] !== 1) {
            let isThere = gcode.find((element) => element.color === colors[index].color && !mySet1.has(element.id - 1)) ; 
            if (isThere === undefined) {
                temp[index] = -1 ; 
            }
            else {
                temp[index] = 0 ; 
                mySet1.add(isThere.id - 1) ; 
            }
          }
      }
    //   console.log(temp) ; 
      temp.sort() ; 
      temp.reverse();
      sethint(temp);
    },[count]) ; 
    
    useEffect(() => {
        let count = 0 ; 
        for (let element of hint) {
            if (element === 1) {
                count++ ; 
            }
        }
        if (count === 4) {
            props.setwin(true) ; 
        }
    },[hint]) ; 

    const changeColor = (index) => {
        if (check) {
            return ; 
          }
          let newColors = [...colors] ; 
          newColors[index] = {...newColors[index],color:props.color}
          setcolors(newColors) ; 
    }
    const handleonsubmit = () => { 
          if (check) {
              return ; 
          }
          setcheck(true) ; 
          setcount(count => count+1)
          props.setcount(count => count + 1) ; 
    }


    return (
        <div>
        <div className="container">
            {colors.map((element,index) => {
                let bg = [element.color,"code_box"] ; 
                return (
                     <div key={element.id}  className={bg.join(' ')} onClick={() => changeColor(index)} >
                     </div>
                )
            })}
            {props.index === props.count + 1 && <button className='btn-submit' onClick={handleonsubmit}>Check Code</button>}
        </div>
        <Hint hint={hint} setwin={props.setwin}/>
        </div>
    ) ; 
}

export default Prediction ;  