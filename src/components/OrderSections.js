import React from 'react'
import { CardOverflow, CardsSections } from '../styles/OrderCoffeeStyled'
import { OrderCard } from './OrderCard'

export const OrderSections = ({ id, title, handleCheck, coffee, CardCategories, overflow, width }) => {
    return (
        <CardsSections id={id}>
            <h2>{title}</h2>
            <CardOverflow activeFlow={overflow} activeWidth={width}>
                {CardCategories.map(item => (
                    <OrderCard key={`Key${item}`} item={item} handleCheck={handleCheck} coffee={coffee} />
                ))}
            </CardOverflow>
        </CardsSections>
    )
}
//¿Which do you drink coffee?