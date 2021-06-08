import React from 'react'
import { Card } from '../styles/OrderCoffeeStyled'

export const OrderCard = ({ item, coffee, handleCheck }) => {
    return (
        <>
            <Card key={`Key${item}`} htmlFor={`Card${item}`} active={coffee[item] || false}>
                <h4>{item}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                <input id={`Card${item}`} type="checkbox" onChange={handleCheck} value={item} checked={coffee[item] || false} name={item} />
            </Card>
        </>
    )
}