import { useDispatch, useSelector } from "react-redux";
import { selectContact, selectLoading } from "../components/redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../components/redux/operations";
import { ContactList } from "../components/ContactList/ContactList";
import { DocumentTitle } from "../components/DocumentTitle/DocumentTitle";
import { ContactForm } from "../components/ContactForm/Contact.Form";

export default function Contatcs() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const contacts = useSelector(selectContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <DocumentTitle>My Contacts</DocumentTitle>
      {contacts.length === 0 ? <ContactForm /> : null}
      {loading ? "Loading..." : <ContactList />}
      {!loading && contacts.length > 0 && <ContactForm />}
    </div>
  );
}
