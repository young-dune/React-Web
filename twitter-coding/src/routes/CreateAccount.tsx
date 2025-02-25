import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding:50px 0px;
`;
const Title = styled.h1`
    font-size: 42px;
`;

const Form = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;
const Input = styled.input`
    padding:10px 20px;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 16px;
    &[type="submit"]{
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
    }
`;

const Error = styled.span`
    font-weight: 600;
    color: tomato;
`;

export default function CreateAccount() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = e;
        if (name === "name") { setName(value); }
        else if (name === "email") { setEmail(value); }
        else if (name === "password") { setPassword(value); }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading || name === "" || email === "" || password === "") return;
        // 입력값이 잘못됐거나 loading === true라면 => 일찍 종료한다.
        try {
            setLoading(true);
            const credent = await createUserWithEmailAndPassword(auth, email, password);
            // 1. create account with credent
            console.log(credent.user);
            await updateProfile(credent.user, {
                displayName: name,
            });
            // 2. update user profile
            navigate("/");
            // 3. redirecting to home page.
        } catch (e) {
            //set error => 해당 이메일로 이미 계정이 존재하거나 비밀번호가 유효하지 않은 경우.
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <Wrapper>
            <Title>Join 𝕏</Title>
            <Form onSubmit={onSubmit}>
                <Input
                    onChange={onChange}
                    name="name"
                    value={name}
                    placeholder="Name"
                    type="text"
                    required />
                <Input
                    onChange={onChange}
                    name="email"
                    value={email}
                    placeholder="Email"
                    type="email"
                    required />
                <Input
                    onChange={onChange}
                    name="password"
                    value={password}
                    placeholder="Password"
                    type="password"
                    required />
                <Input type="submit" value={loading ? "Loading..." : "Create Account"} />

            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
        </Wrapper>
    )
}

