import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
  return (
    <div>
      <h3>Contact List</h3>
      <ul>
        {contacts.map((contact) => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
