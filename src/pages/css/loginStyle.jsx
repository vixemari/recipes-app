import styled from 'styled-components';

const baseFontSize = 40;
const diferenceValue = 4;
const buttonColor = 'FF0000';

const Form = styled.form`
    display: flex;
    height: 680px;
    color: #636C5F;

background: #FFA113;
background: -moz-linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
background: -webkit-linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
background: linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);

    flex-direction: column;

    align-items: center;

    span {
        margin-top: 80px;
        font-weight: 700;
        font-size: ${baseFontSize}px;
        margin-bottom: ${baseFontSize / 2}px;
        // border-bottom: 4px solid black;
    }

    p {
        font-size: ${baseFontSize / 2}px;
        margin-bottom: ${baseFontSize}px;
        // border-bottom: 1px solid black;
    }

    input {
        background: transparent;
        width: 300px;
        height: 40px;
        margin-top: ${baseFontSize}px;
        margin-bottom: ${baseFontSize / diferenceValue}px;
        border: 0;
        outline: 0;
        border-bottom: 1px solid black;
    }

    input::placeholder {
        font-size: ${baseFontSize / 2}px;
        color: #644805;
    }

    button {
        margin-top: ${baseFontSize}px;
        background: #${buttonColor};
        color: white;
        border-radius: 60px;
        width: ${baseFontSize * diferenceValue}px;
        height: 40px;
        font-size: 20px;
        transition-duration: 0.4s;
    }

    img {
        display: block;
        border-radius: 6px;
        width: 100%;
        height: 280px;
    }

`;

export default Form;
