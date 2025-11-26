function ContactItem({ contact }) {
  const { name, lastName, email, phone } = contact;
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
      </li>
    </div>
  );
}

export default ContactItem;
