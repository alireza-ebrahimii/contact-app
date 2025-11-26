import { useState } from "react";

function Contacts() {
  const [contact, setContact] = useState({
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

    setContacts((contacts) => [...contacts, contact]);

    console.log(contacts);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={changeHandler}
        value={contact.name}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={changeHandler}
        value={contact.lastName}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={changeHandler}
        value={contact.email}
      />

      <input
        type="text"
        placeholder="Phone"
        name="phone"
        onChange={changeHandler}
        value={contact.phone}
      />
      <button onClick={addHandler}>Add Contact</button>
      {alert ? <p>{alert}</p> : ""}
    </>
  );
}

export default Contacts;
