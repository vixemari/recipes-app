import styled from 'styled-components';

const colorFont = '#5B4500';

const RecipesCardStyle = styled.div`
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    .imgDiv {
        margin: 8px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: auto;
        height: auto;
        border: 2px solid #5B4500;
        border-radius: 8px;
    }
    .image {
        border-radius: 50%;
        width: 90%;
        height: auto;
    }

    .imgDiv p {
        margin-top: 12px;
        font-size: 30px;
        color: #5B4500;
        border-bottom: 3px solid ${colorFont}
        // text-decoration: underline;
    }
`;

export default RecipesCardStyle;
