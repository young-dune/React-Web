import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css'; // 스타일을 별도로 작성

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/React-Web');  // 홈으로 이동
    };

    return (
        <div className={styles.navbar} onClick={handleClick}>
            <span>Movie Explorer</span>
        </div>
    );
};

export default Navbar;
