import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsrefreshing,
  selectUser,
} from "../components/redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsrefreshing);
  const user = useSelector(selectUser);

  return { isLoggedIn, isRefreshing, user };
};
