import React from "react";

export const ContactPicker = (props) => {
const {list, onChange}= props;

  return (
    <select onChange={onChange} >

           <option selected='selected' key='' value='text' >no contact selected</option>

           { list.map((option)=>{

              <option value={option} key={option}>{option}</option>

           })}
    </select>
  );
};
