import { auth } from "../firebase"


export default function Home() {
    const logout = () => {
        auth.signOut();
    }
    return (
        <div>
            <h1><button onClick={logout}>LogOut!</button></h1>
        </div>
    )
}
