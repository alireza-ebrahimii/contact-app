import { useState } from "react";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
    console.log(contact)
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
      <button>Add Contact</button>
    </>
  );
}

export default Contacts;
