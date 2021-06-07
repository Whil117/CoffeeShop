import React, { useEffect, useState } from 'react'

export const CustomCoffee = () => {
    const [ingredient, setIngredient] = useState({
        sugar:false,
        milk:false,
        cold:false,
        chocolat:false,
    })
    //
    const handleSendCoffee = () => {
        console.log(ingredient)
    }
    const handleCheck = (event) => {
        setIngredient({
            ...ingredient,
            [event.target.name]: !ingredient[event.target.name]
        })
    }
    console.log(ingredient)
    return (
        <div>
            <h1>Coffee</h1>
            <p>Customize your coffee with</p>
            <p>Sugar</p>
            <input onChange={handleCheck} checked={ingredient.sugar}  name="sugar" type="checkbox" />
            <p >Milk</p>
            <input onChange={handleCheck} checked={ingredient.milk}  name="milk" type="checkbox" />
            <p >Chocolat</p>
            <input onChange={handleCheck}  checked={ingredient.chocolat} name="chocolat" type="checkbox" />
            <p>Cold</p>
            <input onChange={handleCheck}  checked={ingredient.cold} name="cold" type="checkbox" />
            <button onClick={handleSendCoffee}>Send</button>
        </div>
    )
}
