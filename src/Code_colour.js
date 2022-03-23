import React from 'react';
import ReactDOM from 'react-dom';
import './code_colour.css' ; 

const colors = [
    {
     id : 1,
     color : "black"
    },
    { 
      id : 2,
      color : "blue"
    },
    {
      id : 3,
      color : "red"  
    },
    {
      id : 4,
      color : "yellow"
    },
]

const CodeColour = (props) => {

    const changecolor = (color) => {
          //  console.log(color);
           props.setcolor(color) ; 
    }

    return (
        <div className="container">
            <h5>Pick colours</h5>
            {colors.map((element) => {
                let bg = [element.color,"box"] ; 
                return (
                     <div key={element.id}  className={bg.join(' ')} onClick={() => changecolor(element.color)} >
                     </div>
                )
            })}
        </div>
    ) ; 
}

export default CodeColour ;  