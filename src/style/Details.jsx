import styled from 'styled-components';

const colorFont = '#5B4500';
const Details = styled.div`
    display: flex;
    color: ${colorFont};
    flex-direction: column;
    margin: 0 12px;
    margin-bottom: 100px;

    .image {
        width: 100%;
    }

    & button {
        width: 45px;
        height: 35px;
        border: 3px solid black;
        border-radius: 6px;
        margin: 0 4px;
    }

    .divImg {
        margin: 16px 0;
        width: 90%;
        display: flex;
        align-self: center;
        border: 3px solid ${colorFont}
    }

    .divBtnIcon {
        display: flex;
        justify-content: space-between;
    }

    & p {
        font-size: 20px;
    }
    
    .inst {
        text-align: justify;
        padding: 0 8px;
        color: white;
        background: ${colorFont};
        opacity: 0.8;
        border-radius: 6px;
        font-size: 23px;
    }

    .startBtn {
        align-self: center;
        bottom: 0;
        width: 70%;
        position: fixed;
        height: 60px;
        font-size: 40px;
background: #FFA113;
background: -moz-linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
background: -webkit-linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
background: linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);

        color: ${colorFont};
        // font-weight: 700;
        vertical-align: center;
    }

    .ytVideo {
        width: 100%;
        height: 250px;
        align-self: center;
    }

    .category {
        padding-top: 24px;
        width: 100%;
        border-top: 3px solid ${colorFont};
        text-align: left;
        font-size: 50px;
    }

    .title {
        font-size: 55px;
        padding-bottom: 24px;
    }
`;

export default Details;
