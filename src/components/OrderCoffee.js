import React, { useState } from 'react'
import { CardInfo, CardOrder } from '../styles/CardStyled'
import { Card, CardMain, CardOverflow, Cards, CardsChild, CardSlide, CardSlideAnclaMain, CardsSections } from '../styles/OrderCoffeeStyled'

export const OrderCoffee = () => {

    const [coffee, setCustomCoffee] = useState({})
    const [listCoffee, setListCoffee] = useState({})
    const [validation, setValidation] = useState(0)

    const CardCategories = {
        CardDrinkCoffe: ['Coffee_Latte', 'Coffee_Large', 'Coffee_capuccino', 'Coffee_Espresso', 'Coffee_American',],
        CardTypeCoffee: ['origin', 'decaf', 'blended'],
        CardWouldYouLike: ['_200g', '_500g', '_1000g'],
        CardGrindThem: ['wholebean', 'filter', 'cafetiere'],
        CardDelivere: ['Every_week', 'Every_2_week', 'Every_month'],
        CardAnclaArray: ['01-Preferences', '02-Bean_Type', '03-Quantity', '04-Grid_Option', '05-Deliveries',],
    };
    const handleDisplayCoffee = () => {
        setValidation(3)
        setTimeout(() => {
            const isValidListCoffe = (coffee.coffee && coffee.type && coffee.would && coffee.grind && coffee.delivery) ?
                (setListCoffee(coffee), setValidation(2)) : setValidation(1)
            return isValidListCoffe
        }, 1000);

    }
    const handleCheck = (event) => {
        setCustomCoffee({
            ...coffee,
            [event.target.name]: event.target.value
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
                        {CardCategories.CardAnclaArray.map(item => (
                            <a key={`key${item}`} href={`#${item}`}>{item}</a>
                        ))}
                    </CardSlideAnclaMain>
                </div>
            </CardSlide>
            <Cards>
                <CardsSections >
                    <h2>¿Which do you drink coffee?</h2>
                    <CardOverflow activeFlow="true" activeWidth="true" id={CardCategories.CardAnclaArray[0]} >
                        {CardCategories.CardDrinkCoffe.map(item => (
                            <div>
                                <Card key={`Key${item}`} htmlFor={`Card${item}`} id={CardCategories.CardAnclaArray[0]} active={coffee.coffee === item}>
                                    <h4>{item}</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                </Card>
                                <input id={`Card${item}`} value={item} checked={coffee.coffee === item} type="radio" onChange={handleCheck} name="coffee" />
                            </div>
                        ))}
                    </CardOverflow>
                </CardsSections>
                <CardsSections >
                    <h2>¿What type of Coffee?</h2>
                    <CardsChild >
                        {CardCategories.CardTypeCoffee.map(item => (
                            <div>
                                <Card key={`Key${item}`} htmlFor={`Card${item}`} id={CardCategories.CardAnclaArray[1]} active={coffee.type === item} >
                                    <h4>{item}</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                </Card>
                                <input id={`Card${item}`} value={item} type="radio" checked={coffee.type === item} onChange={handleCheck} name="type" />
                            </div>
                        ))}
                    </CardsChild>
                </CardsSections>
                <CardsSections >
                    <h2>¿How much would you  like?</h2>
                    <CardsChild >
                        {CardCategories.CardWouldYouLike.map(item => (
                            <div>
                                <Card key={`Key${item}`} htmlFor={`Card${item}`} id={CardCategories.CardAnclaArray[2]} active={coffee.would === item} >
                                    <h4>{item}</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                </Card>
                                <input id={`Card${item}`} value={item} type="radio" checked={coffee.would === item} onChange={handleCheck} name="would" />
                            </div>
                        ))}
                    </CardsChild>
                </CardsSections>
                <CardsSections >
                    <h2>¿Want us to grind them?</h2>
                    <CardsChild>
                        {CardCategories.CardGrindThem.map(item => (
                            <div>
                                <Card key={`Key${item}`} htmlFor={`Card${item}`} id={CardCategories.CardAnclaArray[3]} active={coffee.grind === item} >
                                    <h4>{item}</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                </Card>
                                <input id={`Card${item}`} value={item} checked={coffee.grind === item} type="radio" onChange={handleCheck} name="grind" />
                            </div>
                        ))}
                    </CardsChild>
                </CardsSections>
                <CardsSections >
                    <h2>¿How often should we deliver?</h2>
                    <CardsChild>
                        {CardCategories.CardDelivere.map(item => (
                            <div>
                                <Card key={`Key${item}`} htmlFor={`Card${item}`} id={CardCategories.CardAnclaArray[4]} active={coffee.delivery === item} >
                                    <h4>{item}</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                </Card>
                                    <input id={`Card${item}`} value={item} checked={coffee.delivery === item} type="radio" onChange={handleCheck} name="delivery" />
                            </div>
                        ))}
                    </CardsChild>
                </CardsSections>
                <button onClick={handleDisplayCoffee}>Create Coffee</button>
                {validation === 1 &&
                    <p>Finish the form please</p>
                }{validation === 3 &&
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" styles="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering:" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" >
                        <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#128756" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                        </circle>
                        <circle cx="50" cy="50" r="23" strokeWidth="8" stroke="#a3711a" strokeDasharray="36.12831551628262 36.12831551628262" strokeDashoffset="36.12831551628262" fill="none" strokeLinecap="round">
                            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
                        </circle>
                    </svg>
                }
                {validation === 2 &&
                    <CardOrder>
                        <div>

                            <img src={`images/${listCoffee.coffee}.png`} alt="" />
                        </div>
                        <CardInfo>
                            <h3>{listCoffee?.coffee}</h3>
                            <p><b>Type: </b>{listCoffee?.type}</p>
                            <p><b>With: </b>{listCoffee?.would}</p>
                            <p><b>Grind: </b>{listCoffee?.grind}</p>
                            <p><b>Week: </b>{listCoffee?.delivery}</p>
                        </CardInfo>
                    </CardOrder>
                }
            </Cards>
        </CardMain>
    )
}
