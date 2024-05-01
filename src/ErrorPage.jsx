import { Link, useRouteError } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>აღნიშნული გვერდი არ არსებობს!</h1>
      <p><TbError404 size={500} /></p>
      <h2>
        <Link to="/" className="">
          მთავარი გვერდი
        </Link>
      </h2>
    </div >
  );
}