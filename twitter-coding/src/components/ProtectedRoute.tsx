import { Navigate } from "react-router-dom";
import { auth } from "../firebase";


// 1. 로그인한 사용자는 Protected Route를 볼 수 있고,
// 2. 로그인 하지 않은 경우, 로그인 or 계정 생성 페이지로 redirection 된다.

function ProtectedRoute({ children, }: { children: React.ReactNode; }) {
    const user = auth.currentUser;
    console.log(user);
    if (user === null) {
        return <Navigate to="/login" />
    } // 만약 유저 정보 === null 이라면, /home or /profile로 이동하려할 때 , /login으로 redirection된다.
    return children;
}

export default ProtectedRoute