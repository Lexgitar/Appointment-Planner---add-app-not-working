import React from "react";

export const ContactForm = (props) => {
const {name, setName, phone, setPhone, email, setEmail, handleSubmit} = props;
const handleName=(e)=>{
      setName(e.target.value);
};

const handlePhone =(e)=>{
  setPhone(e.target.value);
}

const handleEmail =(e)=>{
  setEmail(e.target.value);
}


  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="name" name='name' type='text' onChange={handleName} value={name} />
      <input placeholder="phone"  pattern='^0([1-6][0-9]{8,10}|7[0-9]{9})$'  name='phone' type='tel' onChange={handlePhone} value={phone} />
      <input placeholder="email" name='email' type= 'email'  onChange={handleEmail} value={email} />
      <input type='submit' value='Submit' />

    </form>
  );
};
