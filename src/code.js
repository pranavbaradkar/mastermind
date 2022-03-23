import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './code.css' ; 


const Code = (props) => {
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

    useEffect(()=> {
      if (props.restart) {
        let newColors = [...colors] ; 
        newColors = colors.map((element)=>{
            return (
                   {...element,color:"white"}
            )}); 
        //newColors[index] = {...newColors[index],color:"white"}
        setcolors(newColors) ; 
      }
    },[]) ;  

    useEffect(()=> {
            //  console.log(colors) ; 
    },[colors]) ;  

    useEffect(() => {
      console.log(props.hide) ; 
    },[props.hide]) ; 


  


    const changeColor = (index) => {
          let newColors = [...colors] ; 
          newColors[index] = {...newColors[index],color:props.color}
          setcolors(newColors) ; 
    }
    const handleonsubmit = () => {
      props.sethide(prevhide => !prevhide) ; 
      props.color_code(colors); 
    }



    return (
        <div className="container">
            {colors.map((element,index) => {
                let bg = [element.color,"code_box"] ; 
                return (
                     <div key={element.id}  className={bg.join(' ')} onClick={() => changeColor(index)} >
                     </div>
                )
            })}
            <button className='btn-submit' onClick={handleonsubmit}>Generte the code</button>
            {props.hide && <div className='container-overlay'><p>Code Generated</p></div>}
        </div>
    ) ; 
}

export default Code ;  