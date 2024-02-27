import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../components/redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../components/redux/operations";
import { ContactList } from "../components/ContactList/ContactList";

export default function Contatcs() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <title>Your Contacts</title>
      {loading && "Request is in progress...."}
      <ContactList />
    </div>
  );
}
