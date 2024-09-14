import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Layout from "./layout/Layout";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import ChatBot from "./components/ChatBot";
import Faq from "./components/Faq";
import Translator from "./components/Translator";




function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/home",
          element:<Home/> ,
        },
        {
          path: "/about",
          element:<About/> ,
        },
        {
          path: "/chat",
          element:<ChatBot/> ,
        },
        {
          path: "/faq",
          element:<Faq/>,
        },
        {
          path: "/translate",
          element:<Translator/>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
