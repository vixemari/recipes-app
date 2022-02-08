import styled from 'styled-components';

const btnSize = 50;
const imgSize = 45;
const HeaderStyle = styled.header`
background: #FFA113;
background: -moz-linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
background: -webkit-linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
background: linear-gradient(45deg, #FFA113 0%, #FFC160 68%, #E7BD6B 100%);
// background: #FFA200;
// background: -moz-linear-gradient(-45deg, #FFA200 0%, #E28300 50%, #DF6E00 100%);
// background: -webkit-linear-gradient(-45deg, #FFA200 0%, #E28300 50%, #DF6E00 100%);
// background: linear-gradient(135deg, #FFA200 0%, #E28300 50%, #DF6E00 100%);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    height: 100px;

    .buttonsHeader {
    }
    .btn {
        width: ${btnSize}px;
        height: ${btnSize}px;
        padding: 0;
        margin: 0;
        border-radius: 6px;
        background: white;
        border: 3px solid black;
    }
    .img {
        width: ${imgSize}px;
        height: ${imgSize}px;
    }

    .titleHeader {
        font-size: 80px;
        color: #5B4500;
        // font-weight: 700;
    }
`;

export default HeaderStyle;
