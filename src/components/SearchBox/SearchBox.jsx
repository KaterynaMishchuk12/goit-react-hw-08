import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../redux/filtersSlice";
import { selectFilter } from "../redux/selectors";

export const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    dispatch(setFilterValue(inputValue));
  };
  const value = useSelector(selectFilter);
  return (
    <div className={css.searchForm}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        id={searchId}
        type="text"
        value={value.name}
        onChange={handleSearchChange}
      />
    </div>
  );
};
