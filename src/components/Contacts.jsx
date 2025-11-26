import { useState } from "react";
import inputs from "../inputs";
import ContactList from "./ContactList";
import { v4 } from "uuid";

function Contacts() {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [contacts, setContacts] = useState([]);

  const [alert, setAlert] = useState("");

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please Enter Valid Data");
      return;
    }
    setAlert("");

    const newContact = { ...contact, id: v4() };

    setContacts((contacts) => [...contacts, newContact]);

    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });

    console.log(contacts);
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      {alert ? <p>{alert}</p> : ""}
      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </>
  );
}

export default Contacts;
