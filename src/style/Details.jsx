import styled from 'styled-components';

const colorFont = '#5B4500';
const Details = styled.form`
    display: flex;
    color: ${colorFont};
    flex-direction: column;
    .image {
        width: 100%;
    }

    & button {
        width: 50px;
        height: auto;
        border: 2px solid black;
    }

    .divImg {
        margin-top: 16px;
        width: 70%;
        display: flex;
        align-self: center;
        border: 3px solid ${colorFont}
    }

    .divBtnIcon {
        display: flex;
        justify-content: space-between;
    }
`;

export default Details;
