import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/selectors";
import css from "./ContactList.module.css";
import { SearchBox } from "../SearchBox/SearchBox";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.listContainer}>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <Contact
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
      <SearchBox />
    </div>
  );
};
