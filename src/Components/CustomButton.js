import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomButton.css';

const CustomButton = ({ text, size = 'medium', clickable = true, redirectTo = '/' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (clickable && redirectTo) {
            navigate(redirectTo);
        }
    };

    return (
        <button
            className={`custom-button ${size}`}
            disabled={!clickable}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default CustomButton;
