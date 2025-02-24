import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import CreateAccount from "./routes/CreateAccount";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

const router = createBrowserRouter([
  {
    path: "/", // 모든 페이지에서 발생하게 만듦
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />
  },
])

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  const [Loading, setLoading] = useState(true);
  // firebase가 유저를 확인하는동안 loading화면
  const init = async () => {
    // wait for firebase
    setLoading(false);
  };
  useEffect(() => {
    init()
  }, []);

  return (
    <>
      <GlobalStyles />
      {Loading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  )
}

export default App
