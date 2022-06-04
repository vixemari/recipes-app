import styled from 'styled-components';

const baseFontSize = 40;
const diferenceValue = 4;
const buttonColor = 'FF0000';

const LoginStyle = styled.form`
    display: flex;    
    color: #636C5F;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;

background: #FFA113;
background: -moz-linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
background: -webkit-linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
background: linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);

   

    span {
        margin-top: 80px;
        font-weight: 700;
        font-size: ${baseFontSize}px;
        margin-bottom: ${baseFontSize / 2}px;
        // border-bottom: 4px solid black;
        
    }

    & p {
        font-size: ${baseFontSize / 2}px;
        margin-bottom: ${baseFontSize}px;
        // border-bottom: 1px solid black;
    }

    input {
        background: white;
        width: 300px;
        height: 40px;
        margin-top: ${baseFontSize}px;
        margin-bottom: ${baseFontSize / diferenceValue}px;
        border-radius: 5px;
        outline: 0;
        border-bottom: 1px solid black;
    }

    input::placeholder {
        font-size: 24px;
        color: #644805;
        
    }

    button {
        margin-top: ${baseFontSize}px;
        background: #${buttonColor};
        color: white;
        border-radius: 60px;
        width: ${baseFontSize * diferenceValue}px;
        height: 40px;
        font-size: 25px;
        transition-duration: 0.4s;
    }

    img {
        display: block;
        border-radius: 6px;
        width: 20%;
        height: 20%;
    }
@media (max-width: 768px) {
    img {
        width: 100%;
        height: 100%;
    }
    button {
        width: 100%;
        height: 40px;
        font-size: 20px;
        margin-bottom: ${baseFontSize / diferenceValue}px;
    }
}
`;

export default LoginStyle;
