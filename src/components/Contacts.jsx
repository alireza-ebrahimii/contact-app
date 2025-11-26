import { useState } from "react";
import inputs from "../inputs";
import ContactList from "./ContactList";
import { v4 } from "uuid";
import Styles from "../components/Contacts.module.css";

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
    <div className={Styles.container}>
      <div className={Styles.form}>
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
      <div className={Styles.alert}>{alert ? <p>{alert}</p> : ""}</div>
      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;
