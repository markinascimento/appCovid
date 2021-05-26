import styled from 'styled-components/native';

export const Card = styled.View`
    width: 155px;
    height: 155px;
    background: ${({ bgColor }) => bgColor};
    align-items: center;
    justify-content: space-evenly;
    border-width: 1px;
    border-radius: 10px;
    margin-right: 15px
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #000;
`;

export const NumberDice = styled.Text`
    font-size: 21px;
    font-weight: 600;
    color: #000;
`;