import ContactItem from "./ContactItem";

function ContactList({ contacts, deleteHandler }) {
  return (
    <div>
      <h3>Contact List</h3>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            contact={contact}
            key={contact.id}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
