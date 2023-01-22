import React from "react";
import { Tile } from "../tile/Tile";
import { useLocation} from "react-router";

export function TileList (props){
 
  const {contacts, appointments} = props;
  let location = useLocation();
  let alex ='';

 if (location.pathname.includes('/appointments')){
  alex = appointments;
 }else{
  alex = contacts;
 }

  return (
    <div>
        <ul>
          { alex.map((object, index) => 
          
              <li>
                  <Tile object={object} key={index} />
              </li>
         
          
        )
        } 
        </ul>
    </div>
  );
};
