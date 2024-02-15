import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Not found page</h1>
      <Link to="/">Back to Home page</Link>
    </div>
  );
}
