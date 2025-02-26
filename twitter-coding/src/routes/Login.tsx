import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Form ,Error, Input, Switcher, Title, Wrapper } from "../components/AuthComponents";


export default function CreateAccount() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = e;
        if (name === "email") { setEmail(value); }
        else if (name === "password") { setPassword(value); }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setError(""); // 사용자가 버튼을 한번 더 클릭 -> 에러 내용을 초기화
        e.preventDefault();
        if (loading || email === "" || password === "") return;
        // 입력값이 잘못됐거나 loading === true라면 => 일찍 종료한다.
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
            // 3. if login success -> redirecting to home page.
        } catch (e) {
            if (e instanceof FirebaseError) {
                setError(e.message);
            }
        }
        finally {
            setLoading(false);
        }
    }


    //set error => 해당 이메일로 이미 계정이 존재하거나 비밀번호가 유효하지 않은 경우.
    return (
        <Wrapper>
            <Title>Log into 𝕏</Title>
            <Form onSubmit={onSubmit}>
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
                <Input type="submit" value={loading ? "Loading..." : "Login"} />

            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                Don't have an account?
                <Link to="/create-account"> Create One! &rarr;</Link>
            </Switcher>
        </Wrapper>
    )
}

