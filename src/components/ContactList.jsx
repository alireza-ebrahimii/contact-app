import ContactItem from "./ContactItem";
import styles from "../components/ContactList.module.css";

function ContactList({ contacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              contact={contact}
              key={contact.id}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contact Yet!</p>
      )}
    </div>
  );
}

export default ContactList;
