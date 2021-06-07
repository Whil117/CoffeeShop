import React, { useEffect, useState } from 'react'

export const CustomCoffee = () => {
    const [ingredient, setIngredient] = useState({
        sugar:false,
        milk:false,
        cafeinapura: false,
        cold:false,
        hot: false,
        crema:false,
        hot: false,
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
            <p>Azucar</p>
            <input onChange={handleCheck} checked={ingredient.sugar}  name="sugar" type="checkbox" />
            <p >Leche</p>
            <input onChange={handleCheck} checked={ingredient.milk}  name="milk" type="checkbox" />
            <p >Crema</p>
            <input onChange={handleCheck}  checked={ingredient.crema} name="crema" type="checkbox" />
            <p>Cafeina pura</p>
            <input onChange={handleCheck}  checked={ingredient.cafeinapura} name="cafeinapura" type="checkbox" />
            <p>Cold</p>
            <input onChange={handleCheck}  checked={ingredient.cold} name="cold" type="checkbox" />
            <p>Hot</p>
            <input onChange={handleCheck}  checked={ingredient.hot} name="hot" type="checkbox" />
            <button onClick={handleSendCoffee}>Send</button>
        </div>
    )
}
/*
cafe latte__
*leche
*sugar
*expreso
*frio o caliente

cafe capuccino___
*leche
*espreso
*sugar
*frio o caliente

espresso
cafeina normal

americano__
*frio o caliente
*Crema
*cafeina puro


*/