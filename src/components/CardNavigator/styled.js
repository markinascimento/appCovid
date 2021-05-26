import styled from 'styled-components/native';

//Container of Button
export const Button = styled.View`
    width: 170px;
    height: 170px;
    background-color: ${({bgColor}) => bgColor};
    padding-top: 5px;
    padding-bottom: 5px;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    border-width: 0.3px;
    margin-left: 15px;
    margin-right: 15px;
`

//Text
export const Label = styled.Text`
    font-size: 22px;
    font-weight: 700;
    color: #FFF;
`;