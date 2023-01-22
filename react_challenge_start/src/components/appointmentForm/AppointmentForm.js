import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
  const {contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit} = props;

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-GB")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitle =(e)=>{
    setTitle(e.target.value);
  }
   const handleContact=(e)=>{
    setContact(e.target.value);
   }

   const handleDate=(e)=>{
    setDate(e.target.value);
   }

   const handleTime=(e)=>{
    setTime(e.target.value);
   }

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="title" type='text' onChange={handleTitle}  value={title} />
        <input   type='date' onChange={handleDate} value={date}  min={getTodayString} />
        <input  type='time' onChange={handleTime}  value={time} />
        <ContactPicker list = {contacts} onChange = {handleContact}/>
        <input type='submit' />
        

    </form>
  );
};
