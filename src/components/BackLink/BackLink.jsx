import { Link } from "react-router-dom";
import css from "../BackLink/BackLink.module.css";

export const BackLink = ({ href, children }) => {
  return (
    <Link to={href} className={css.btnLink}>
      {children}
    </Link>
  );
};
