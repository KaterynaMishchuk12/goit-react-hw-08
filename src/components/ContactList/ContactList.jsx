import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/selectors";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  // const filter = useSelector(selectFilter);

  // const searchedContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <Contact
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.phone}
          />
        ))}
      </ul>
    </div>
  );
};
