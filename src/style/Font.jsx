import styled from 'styled-components';
import font from '../assets/Bellfoods.otf';

const Font = styled.header`
    @font-face {
        font-family: "yaya";
        src: url(${font}) format('opentype');
    }
    font-family: 'yaya';
`;

export default Font;
