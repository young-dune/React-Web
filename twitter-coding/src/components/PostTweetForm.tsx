import { useState } from "react";
import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const TextArea = styled.textarea`
    border: 2px solid white;
    padding: 20px;
    border-radius: 20px;
    font-size: 16px;
    color: white;
    background-color: black;
    width: 100%;
    resize: none; 
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &::placeholder{
        font-size: 16px;

    }
    &:focus{
        outline: none;
        border-color: #1d9bf0;
    }   
`;
const AttachFileBtn = styled.label`
    padding: 10px;
    color: #1d9bf0;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #1d9bf0;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    `;
const AttachFileInput = styled.input`
    display:none;   
`;
const SubmitBtn = styled.input`
    background-color: #1d9bf0;
    color: white;
    border: 1px solid #1d9bf0;
    padding: 10px 0px;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    &:hover,
    &:active{
        opacity: 0.8;
    }

`;


export default function PostTweetForm() {
    const [loading, setLoading] = useState(false);
    const [tweet, setTweet] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweet(e.target.value);
    };
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files.length === 1) {
            setFile(files[0]); // 파일을 1개만 받고싶을 때?
        } // 타입이 file인 input이 변경될 때마다 파일의 배열을 받는다.
    }

    return (
        <Form>
            <TextArea
                rows={5}
                maxLength={180}
                onChange={onChange}
                value={tweet}
                placeholder="What is happening?"
            />
            <AttachFileBtn
                htmlFor="file">
                {file ? "Photo added✅" : "Add photo"}
            </AttachFileBtn>
            <AttachFileInput
                onChange={onFileChange}
                type="file"
                id="file"
                accept="image/*"
            />
            <SubmitBtn
                type="submit"
                value={loading ? "Posting..." : "Post Tweet"}
            />
        </Form>
    )
}
