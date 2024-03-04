import { BiSolidUser } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { deleteContact } from "../redux/operations";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = (contactId) => dispatch(deleteContact(contactId));

  return (
    <li key={id}>
      <div className={css.container}>
        <div className={css.contactInfo}>
          <p className={css.p}>
            <BiSolidUser className={css.icon} />
            {name}
          </p>
          <p>
            <BsFillTelephoneFill className={css.icon} />
            {number}
          </p>
        </div>
        <AiFillDelete
          style={{ size: "18px", color: "darkblue", cursor: "pointer" }}
          onClick={() => handleDeleteContact(id)}
        />
      </div>
    </li>
  );
};
