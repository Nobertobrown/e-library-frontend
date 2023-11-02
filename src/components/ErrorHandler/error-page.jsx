import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="centered">
      <h1>{`${error.statusText}!` || "Oops!"}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.data.message || error.message || error.data.data[0].msg}</i>
      </p>
    </div>
  );
}

//TODO: Check for errors caused by backend validation by using 'error.data.data[0].msg ||'
//Its because we can't access data[0] of undefined