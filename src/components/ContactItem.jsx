import Styles from "../components/ContactItem.module.css";

function ContactItem({ contact, deleteHandler }) {
  const { name, lastName, email, phone, id } = contact;
  return (
    <li className={Styles.item}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📨</span>
        {email}
      </p>
      <p>
        <span>📞</span>
        {phone}
      </p>
      <button onClick={() => deleteHandler(id)}>🗑️</button>
    </li>
  );
}

export default ContactItem;