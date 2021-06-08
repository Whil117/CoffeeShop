import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'

const Card = styled.label`
      flex: 0 0 283px;
      padding: 10px;
      margin: 10px;
      border: none;
      background: #FFFFFF;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      width: 283px;
      height: 289px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: black;
      ${({ active }) => active && css`
        color: white;
        background-color: #128756;

      ` }
      input{
          display: none;
      }
`
const CardMain = styled.div`
scroll-behavior: smooth;
      display: flex;
      font-family: 'Quicksand', sans-serif;
`
const Cards = styled.div`
      font-family: 'Quicksand', sans-serif;
`
const CardsSections = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
`
const CardsChild = styled.div`
      display: flex;
      flex-wrap: wrap;
      align-items:center;
      justify-content: center;
`
const CardSlide = styled.div`
     width: 280px;
     display: flex;
     flex-direction: column;
     align-items:flex-start;
     padding: 10px;
     div{
         top: 0;
         position:sticky;
     }
     h3{
         color:#128756;
         font-size: 24px;
     }
`
const CardSlideAnclaMain = styled.div`
       display: flex;
       flex-direction: column;
       a{
           border-radius: 10px;
        color: black;
        text-decoration: none;
        font-size: 24px;
        padding: 10px;
       }
       a:active{
        color: white;
        background-color: #128756;
       }

`
const CardOverflow = styled.div`
      display:flex;
      width: 950px;
      overflow-x:auto;
`
export const CustomCoffee = () => {
    const [coffee, setCustomCoffee] = useState({})

    const handleSendCoffee = (event) => {
        event.preventDefault()
        console.log(coffee)
    }
    const CardDrinkCoffe = ['Coffee Latte', 'Coffee Large', 'Coffee capuccino', 'Coffee Espresso', 'Coffee American',]
    const CardTypeCoffee = ['origin', 'decaf', 'blended',]
    const CardWouldYouLike = ['200g', '500g', '1000g',]
    const CardGrindThem = ['wholebean', 'filter', 'cafetiere',]
    const CardDelivere = ['Every week', 'Every 2 week', 'Every month'
    ]
    const handleCheck = (event) => {
        setCustomCoffee({
            ...coffee,
            [event.target.name]: !coffee[event.target.name]
        })
    }
    console.log(coffee)
    return (
        <CardMain>
            <CardSlide>
                <div>
                    <div>
                        <h3>Menú</h3>
                    </div>
                    <CardSlideAnclaMain>
                        <a href="#drink">01-Preferences</a>
                        <a href="#type">02-Bean Type</a>
                        <a href="#would">03-Quantity</a>
                        <a href="#grind">04-Grid Option</a>
                        <a href="#deliver">05-Deliveries</a>
                    </CardSlideAnclaMain>
                </div>
            </CardSlide>
            <Cards>
                <CardsSections id="drink">
                    <h2>¿Which do you drink coffee?</h2>
                    <CardOverflow>
                        {CardDrinkCoffe.map(item => (
                            <Card key={`Key${item}`} htmlFor={`Card${item}`} active={coffee[item] || false}>
                                <h4>{item}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                <input id={`Card${item}`} type="checkbox" onChange={handleCheck} checked={coffee[item] || false} name={item} />
                            </Card>
                        ))}
                    </CardOverflow>
                </CardsSections>
                <CardsSections id="type">
                    <h2>¿What type of Coffee?</h2>
                    <CardsChild>
                        {CardTypeCoffee.map(item => (
                            <Card key={`Key${item}`} htmlFor={`Card${item}`} active={coffee[item] || false}>
                                <h4>{item}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                <input id={`Card${item}`} type="checkbox" onChange={handleCheck} checked={coffee[item] || false} name={item} />
                            </Card>
                        ))}
                    </CardsChild>
                </CardsSections>
                <CardsSections id="would">
                    <h2>¿How much would you  like?</h2>
                    <CardsChild>
                        {CardWouldYouLike.map(item => (
                            <Card key={`Key${item}`} htmlFor={`Card${item}`} active={coffee[item] || false}>
                                <h4>{item}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                <input id={`Card${item}`} type="checkbox" onChange={handleCheck} checked={coffee[item] || false} name={item} />
                            </Card>
                        ))}
                    </CardsChild>
                </CardsSections>
                <CardsSections id="grind">
                    <h2>¿Want us to grind them?</h2>
                    <CardsChild>
                        {CardGrindThem.map(item => (
                            <Card key={`Key${item}`} htmlFor={`Card${item}`} active={coffee[item] || false}>
                                <h4>{item}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                <input id={`Card${item}`} type="checkbox" onChange={handleCheck} checked={coffee[item] || false} name={item} />
                            </Card>
                        ))}
                    </CardsChild>
                </CardsSections>
                <CardsSections id="deliver">
                    <h2>¿How often should we deliver?</h2>
                    <CardsChild>
                        {CardDelivere.map(item => (
                            <Card key={`Key${item}`} htmlFor={`Card${item}`} active={coffee[item] || false}>
                                <h4>{item}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                <input id={`Card${item}`} type="checkbox" onChange={handleCheck} checked={coffee[item] || false} name={item} />
                            </Card>
                        ))}
                    </CardsChild>
                </CardsSections>
                <button type="submit" onClick={handleSendCoffee}>Send</button>
            </Cards>
        </CardMain>
    )
}