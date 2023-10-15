import {
  createBrowserRouter
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ErrorPage from "./components/Dashboard/Shared/ErrorPage";


const App =  createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "team",
        // element: <Team />,
      },
    ],
  },
])

export default App;
