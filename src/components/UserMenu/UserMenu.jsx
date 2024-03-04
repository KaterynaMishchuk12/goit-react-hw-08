import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { logOut } from "../redux/auth/operations";
import css from "./UserMenu.module.css";
import { FcReddit } from "react-icons/fc";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.container}>
      <p className={css.text}>
        Welcome, {user.name} <FcReddit size="32px" />
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
};
