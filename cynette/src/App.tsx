import {
  createBrowserRouter
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ErrorPage from "./components/Dashboard/Shared/ErrorPage";
import Home from "./components/Dashboard/Home/Home";
import AboutUs from "./components/Dashboard/About Us/AboutUs";
import ContactUs from "./components/Dashboard/Contact-Us/ContactUs";
import Blog from "./components/Dashboard/Blog/Blog";


const App =  createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "ContactUs",
        element: <ContactUs />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
    ],
  },
])

export default App;
