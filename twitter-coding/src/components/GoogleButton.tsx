import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import styled from "styled-components"
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
    background-color: white;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 50px;
    border:0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    color: black;
    width: 100%;
    margin-top: 20px;
    cursor: pointer;
`;

const Logo = styled.img`
border: none;
    height: 25px;
`;

export default function GoogleButton() {
    const navigate = useNavigate();
    const onClick = async () => {
        try {
            const googleProvider = new GoogleAuthProvider();
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Button onClick={onClick}>
            <Logo src="/google-logo2.svg" />
            Continue with Google
        </Button>
    )
}
