import React, { useState } from 'react'
import { CardCategories } from '../assets/CardData'
import { CardInfo, CardOrder } from '../styles/CardStyled'
import { Card, CardMain, CardOverflow, Cards, CardsChild, CardSlide, CardSlideAnclaMain, CardsSections, MyOrder } from '../styles/OrderCoffeeStyled'

export const OrderCoffee = () => {
    const [coffee, setCustomCoffee] = useState({ id: 1 })
    const [listCoffee, setListCoffee] = useState([])
    const [validation, setValidation] = useState(0)
    const { id } = coffee

    const handleCheck = (event) => {
        setCustomCoffee({
            ...coffee,
            [event.target.name]: event.target.value
        })
    }

    const handleDisplayCoffee = () => {
        setValidation(3)
        setCustomCoffee({
            ...coffee,
            id: id + 1
        })
        setTimeout(() => {
            const isValidListCoffe = (coffee.coffee && coffee.type && coffee.would && coffee.grind && coffee.delivery) ?
                (setListCoffee([
                    coffee,
                    ...listCoffee,
                ]), setValidation(2)) : setValidation(1)

            return isValidListCoffe
        }, 1000);
    }
    const handleDeleteCard = (id) => {
        const DeleteCoffee = listCoffee.filter(item => item.id !== id)
        setListCoffee(DeleteCoffee)
    }
    return (
        <CardMain>
            <CardSlide>
                <div>
                    <div>
                        <h3>Menú</h3>
                    </div>
                    <CardSlideAnclaMain>
                        {CardCategories.CardAnclaArray.map(item => (
                            <a key={`link${item}`} href={`#${item}`} >{item}</a>
                        ))}
                    </CardSlideAnclaMain>
                </div>
            </CardSlide>
            <Cards>
                <CardsSections id={CardCategories.CardAnclaArray[0]}>
                    <h2>¿Which do you drink coffee?</h2>
                    <CardOverflow activeFlow="true" activeWidth="true" id={CardCategories.CardAnclaArray[0]} >
                        {CardCategories.CardDrinkCoffe.map(item => (
                            <div key={`Key${item}`}>
                                <Card htmlFor={`Card${item}`} active={coffee.coffee === item}>
                                    <h4>{item}</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                </Card>
                                <input id={`Card${item}`} value={item} checked={coffee.coffee === item} type="radio" onChange={handleCheck} name="coffee" />
                            </div>
                        ))}
                    </CardOverflow>
                </CardsSections>
                <CardsSections id={CardCategories.CardAnclaArray[1]} >
                    <h2>¿What type of Coffee?</h2>
                    <CardsChild >
                        {CardCategories.CardTypeCoffee.map(item => (
                            <div key={`Key${item}`}>
                                <Card htmlFor={`Card${item}`} active={coffee.type === item} >
                                    <h4>{item}</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                </Card>
                                <input id={`Card${item}`} value={item} type="radio" checked={coffee.type === item} onChange={handleCheck} name="type" />
                            </div>
                        ))}
                    </CardsChild>
                </CardsSections>
                <CardsSections id={CardCategories.CardAnclaArray[2]} >
                    <h2>¿How much would you  like?</h2>
                    <CardsChild >
                        {CardCategories.CardWouldYouLike.map(item => (
                            <div key={`Key${item}`}>
                                <Card htmlFor={`Card${item}`} active={coffee.would === item} >
                                    <h4>{item}</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                </Card>
                                <input id={`Card${item}`} value={item} type="radio" checked={coffee.would === item} onChange={handleCheck} name="would" />
                            </div>
                        ))}
                    </CardsChild>
                </CardsSections>
                <CardsSections id={CardCategories.CardAnclaArray[3]} >
                    <h2>¿Want us to grind them?</h2>
                    <CardsChild>
                        {CardCategories.CardGrindThem.map(item => (
                            <div key={`Key${item}`} >
                                <Card htmlFor={`Card${item}`} active={coffee.grind === item} >
                                    <h4>{item}</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                </Card>
                                <input id={`Card${item}`} value={item} checked={coffee.grind === item} type="radio" onChange={handleCheck} name="grind" />
                            </div>
                        ))}
                    </CardsChild>
                </CardsSections>
                <CardsSections id={CardCategories.CardAnclaArray[4]} >
                    <h2>¿How often should we deliver?</h2>
                    <CardsChild>
                        {CardCategories.CardDelivere.map(item => (
                            <div key={`Key${item}`}>
                                <Card htmlFor={`Card${item}`} active={coffee.delivery === item} >
                                    <h4>{item}</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, </p>
                                </Card>
                                <input id={`Card${item}`} value={item} checked={coffee.delivery === item} type="radio" onChange={handleCheck} name="delivery" />
                            </div>
                        ))}
                    </CardsChild>
                </CardsSections>
                <button onClick={handleDisplayCoffee}>Create Coffee</button>
                {validation === 1 && <p>Finish the form please</p>}
                {validation === 3 &&
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" styles="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering:" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" >
                        <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#0e8684" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                        </circle>
                        <circle cx="50" cy="50" r="23" strokeWidth="8" stroke="#fdd5b9" strokeDasharray="36.12831551628262 36.12831551628262" strokeDashoffset="36.12831551628262" fill="none" strokeLinecap="round">
                            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
                        </circle>
                    </svg>
                }
                <MyOrder id={CardCategories.CardAnclaArray[5]}>
                    <h3>Your Order</h3>
                    {listCoffee.map(item => (
                        <CardOrder id={item.id} key={item.id}>
                            <div>
                                <img src={`images/${item.coffee}.png`} alt={item.coffee} />
                            </div>
                            <CardInfo>
                                <h3>{item?.coffee}</h3>
                                <p><b>Type: </b>{item?.type}</p>
                                <p><b>With: </b>{item?.would}</p>
                                <p><b>Grind: </b>{item?.grind}</p>
                                <p><b>Week: </b>{item?.delivery}</p>
                            </CardInfo>
                            <button onClick={() => handleDeleteCard(item.id)}>X</button>
                        </CardOrder>
                    ))}
                </MyOrder>
            </Cards>
        </CardMain>
    )
}
