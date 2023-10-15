import { useRouteError } from "react-router-dom";
import { PageErrorType } from "../../../interface/interface";

export default function ErrorPage() {
  const errorReceived = useRouteError() as  PageErrorType;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorReceived.statusText || errorReceived.message}</i>
      </p>
    </div>
  );
}