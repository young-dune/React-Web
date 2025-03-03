import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Detail from "./pages/Detail";

function App() {
  return <Router>
    <Routes>
      <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      <Route path={process.env.PUBLIC_URL + "/movie/:id"} element={<Detail />} />
    </Routes>
  </Router>;
}

export default App;

/*  
  1. 유저가 홈화면으로 갈 때 Route -> /Home
  
  2. Routes는 기존의 Switch를 대신하는데 용도는 한 번에 하나의 Route만 렌더링 하기 위함이다.
  
  3. Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트이다.
  --> 기존 a태그를 이용하면 페이지 전체가 새로고침되기 떄문에 이를 피하기 위해서 Link 컴포넌트를 활용함.
*/