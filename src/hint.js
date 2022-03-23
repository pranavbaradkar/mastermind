import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './hint.module.css' ; 


const Hint = (props) => {
    console.log(props.hint) ; 
    const hintArray = props.hint ; 

    // useEffect(() => {
    //      let count = 0 ; 
    //      for (let element of hintArray) {
    //          if (element === 1) {
    //              count++ ; 
    //          }
    //      }
    //      if (count === 4) {
    //          props.setwin(true) ; 
    //      }
    // },[]); 
    return (
            <div className={style.container}>
                {hintArray.map((element,index)=>{
                    return (
                    <div key={index} className={`${style.box} ${(element === 1) ? style.red : (element === 0) ? style.black : style.white}`}></div>
                    )
                })}
            </div>
    ) ; 
}
export default Hint ;  