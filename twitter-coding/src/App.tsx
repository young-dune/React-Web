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
import ProtectedRoute from "./components/ProtectedRoute";

// router로 전달받은 사용자는 각 루트에 따라 페이지를 이동한다.
const router = createBrowserRouter([
  {
    path: "/", // 모든 페이지에서 발생하게 만듦
    element:
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>,
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
    await auth.authStateReady(); // 사용자가 로그인했는지 안했는지, 그리고 누구인지에 대한 정보를 기다린다.
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
        {/* 사용자를 router로 보낸다. */}
      </Wrapper>
    </>
  )
}

export default App
