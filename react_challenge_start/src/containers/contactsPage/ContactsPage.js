import React , {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

  const {onAdd , contacts} = props;
  //Define state variables for contact info and duplicate check
  const [name, setName]= useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail]= useState('');
  const [duplicate, setDuplicate] = useState(false);

useEffect(()=>{
  //Using hooks, check for contact name in the contacts array variable in props
      if (name === contacts.filter(nameIn => nameIn === name)){
        setDuplicate(true);
      };
}, [name, contacts]);



  const handleSubmit = (e) => {
    e.preventDefault();
    //Add contact info and clear data if the contact name is not a duplicate
    if (!duplicate){
      onAdd([name, phone, email]);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  

  return (
    <div>
      <section> 
      <h2>Add Contact</h2>
        <ContactForm 
              handleSubmit={handleSubmit}
              name = {name}
              setName = {setName}
              phone={phone}
              setPhone={setPhone}
              email = {email}
              setEmail = {setEmail}
        />
      </section>
      <hr />
      <section>
      <h2>Contacts</h2>
        <TileList
            contacts={contacts}
        />
      </section>
    </div>
  );
};

// useEffect(()=>{
//   const timeRemaining = thought.expiresAt - Date.now();
//   const timeout = setTimeout(()=>{
//     props.removeThought(thought.id);
//   }, timeRemaining);

//   return ()=>{
//     clearTimeout(timeout)
//   }
// },[thought]);