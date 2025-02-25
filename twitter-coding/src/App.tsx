import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import CreateAccount from "./routes/CreateAccount";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { auth } from "./firebase";

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

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`

function App() {
  const [Loading, setLoading] = useState(true);
  // firebase가 유저를 확인하는동안 loading화면
  const init = async () => {
    await auth.authStateReady(); // 인증 상태가 로드되었음을 표시?
    setLoading(false);
  };
  useEffect(() => {
    init()
  }, []);

  return (
    <>
      <Wrapper>
        <GlobalStyles />
        {Loading ? <LoadingScreen /> : <RouterProvider router={router} />}
      </Wrapper>
    </>
  )
}

export default App
