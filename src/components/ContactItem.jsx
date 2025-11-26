function ContactItem({ contact, deleteHandler }) {
  const { name, lastName, email, phone, id } = contact;
  return (
    <div>
      <li>
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
    </div>
  );
}

export default ContactItem;
