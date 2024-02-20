import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosSearch } from "react-icons/io";
import css from "../components/Search.module.css";

export const Search = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      autoClose: 3000,
      hideProgressBar: false,
      position: "top-right",
      pauseOnHover: true,
      progress: 0.2,
      delay: 1000,
    };

    if (e.target.elements.query.value.trim() === "") {
      toast.error(`Enter query please`, options);
      return;
    }

    onSearch(e.target.elements.query.value);
    //e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search"
      />
      <button className={css.button} type="submit">
        <IoIosSearch />
      </button>
    </form>
  );
};
