import { Outlet } from "react-router-dom";


export default function layout() {
    return (
        <div>
            <h2>layout</h2>
            <Outlet />
        </div>
    )
}


/* 
    <Outlet/> Outlet은 중첩된 라우트를 통해 하나의 레이아웃 내에서 
    여러 화면을 쉽게 헨더링하게 해준다. 
*/