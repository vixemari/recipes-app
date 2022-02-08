import styled from 'styled-components';

const DrinksCategoryStyle = styled.div`
    .allBtns {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 12px;

        & button {
            border: 2px solid black;
            width: 30%;
            height: auto;
            margin: 0 5px;
            margin-bottom: 12px;
            border-radius: 12px;
            font-size: 18px;
background: #FFA113;
background: -moz-linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
background: -webkit-linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
background: linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
            color: #5B4500;
        }
    }
`;

export default DrinksCategoryStyle;
