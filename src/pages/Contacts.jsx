import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../components/redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../components/redux/operations";
import { ContactList } from "../components/ContactList/ContactList";
import DocumentTitle from "../components/DocumentTitle/DocumentTitle";
import { ContactForm } from "../components/ContactForm/Contact.Form";
import { SearchBox } from "../components/SearchBox/SearchBox";

export default function Contatcs() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>My Contacts</DocumentTitle>
      {loading && "Request is in progress...."}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
