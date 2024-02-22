import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosSearch } from "react-icons/io";
import css from "../Search/Search.module.css";

export const Search = ({ onSubmit }) => {
  const [queryValue, setQueryValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(queryValue);

    if (queryValue.trim() === "") {
      toast.error(`Enter query please`);
      return;
    }

    setQueryValue("");
  };

  const handleInputChange = (e) => {
    setQueryValue(e.target.value);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={queryValue}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search"
        />
        <button className={css.button} type="submit">
          <IoIosSearch />
        </button>
      </form>
    </>
  );
};
