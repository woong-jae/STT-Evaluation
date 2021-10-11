import React from "react";
import styled from "styled-components";

const ToastText = styled("div")`
    position: fixed;
    top: 50%;
    width: 250px;
    height: 20px;
    padding: 11px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
    color: #000;
    font-weight: 600;
    border-radius: 4px;
    border: 1px solid #fff;
    animation: fadein 0.3s, fadeout 0.7s 1.5s;
    @keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }
    @keyframes fadeout {
        from {bottom: 30px; opacity: 1;}
        to {bottom: 0; opacity: 0;}
    }
`

const Toast = ({msg}) => {
    return (
        <ToastText>{msg}</ToastText>
    );
}

export default Toast;