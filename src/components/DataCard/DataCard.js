import React from 'react'
import { View, Text } from 'react-native'

import { Card, Title, NumberDice } from './styles';

function DataCard({ bgColor, title, numberCases }) {
    return (
        <Card bgColor={bgColor}>
            <Title> {title} </Title>
            <NumberDice> {numberCases} </NumberDice>
        </Card>
    )
}

export default DataCard;