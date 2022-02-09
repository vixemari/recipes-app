import styled from 'styled-components';

const colorFont = '#5B4500';
const Progress = styled.div`
    display: flex;
    color: ${colorFont};
    flex-direction: column;
    margin: 0 12px;
    margin-bottom: 100px;
    margin-left: 20px;

    .divDiv {
        margin-left: 20px;
    }
    .divImg {
        margin-left: 20px;
        margin: 16px 0;
        width: 90%;
        display: flex;
        align-self: center;
        flex-direction: column;
        border: 3px solid ${colorFont}
    }

    .divImg img {
        width: 100%;
    }

    .name {
        padding-bottom: 16px;
        border-bottom: 3px solid ${colorFont};
    }

    .divIcon {
        position: absolute;
        right: 10px;
        top: 382px;
    }

    .divIcon button {
        width: 47px;
        height: 38px;
        border: 3px solid black;
        border-radius: 6px;
        margin: 0 4px;
    }

    .divInst {
        font-size: 20px;
    }

    .divBtnFinish {
        width: 360px;
    }

    .divBtnFinish button {
        align-self: center;
        bottom: 0;
        width: 95%;
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
        border: 3px solid black;
        border-radius: 6px;
        margin-left: -20px;
    }
`;

export default Progress;
