import React from "react";

export const Tile = (props) => {
let objecT = props.object;
let theArray = Object.values(objecT);

  return (
    <div className="tile-container">
      {
        theArray.map((item, key) =>{
          let first = <p className ="tile-title" key ={key}>{item}</p>;
          let after = <p className= "tile" key={key}>{item}</p>;
          
          
          if ( key == '0') {
           return  first; 
          } else {
            return after;
          }
          
          
        })
  
      }
    </div>
  );
};
