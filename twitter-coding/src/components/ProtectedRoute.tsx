import { Navigate } from "react-router-dom";
import { auth } from "../firebase";


// 1. 로그인한 사용자는 Protected Route를 볼 수 있고,
// 2. 로그인 하지 않은 경우, 로그인 or 계정 생성 페이지로 redirection 된다.
// + 사용자가 Protected route의 하위 페이지(children)를 못보게 막는다.

function ProtectedRoute({ children, }: { children: React.ReactNode; }) {
    const user = auth.currentUser; // auth.currentUser로 사용자의 정보를 얻을 수 있다. auth는 firebase.ts 파일에서 얻을 수 있다. 
    if (user === null) {
        return <Navigate to="/login" />
    } 
    return children;
}

export default ProtectedRoute