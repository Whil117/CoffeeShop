import React, { useState } from 'react'
import { Card, CardMain, CardOverflow, Cards, CardsChild, CardSlide, CardSlideAnclaMain, CardsSections } from '../styles/OrderCoffeeStyled'
import { OrderCard } from './OrderCard'
import { useRouter } from 'next/router'
import { OrderSections } from './OrderSections'

export const OrderCoffee = () => {
    const router = useRouter()
    const [coffee, setCustomCoffee] = useState({})
    const [validation, setValidation] = useState(false)

    const handleSendCoffee = () => {
        const isObjectEmpty = Object.keys(coffee).length === 0 ? setValidation(true) : (setValidation(false), localStorage.setItem('order', JSON.stringify(coffee)))
        return isObjectEmpty
    }
    const CardCategories = {
        CardDrinkCoffe: ['Coffee_Latte', 'Coffee_Large', 'Coffee_capuccino', 'Coffee_Espresso', 'Coffee_American',],
        CardTypeCoffee: ['origin', 'decaf', 'blended'],
        CardWouldYouLike: ['_200g', '_500g', '_1000g'],
        CardGrindThem: ['wholebean', 'filter', 'cafetiere'],
        CardDelivere: ['Every_week', 'Every_2_week', 'Every_month'],
        CardAnclaArray: ['01-Preferences', '02-Bean_Type', '03-Quantity', '04-Grid_Option', '05-Deliveries',],
    };
    const handleCheck = (event) => {
        setCustomCoffee({
            ...coffee,
            [event.target.name]: !coffee[event.target.name]
        })
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
                            <a key={`key${item}`} href={`#${item}`}>{item}</a>
                        ))}
                    </CardSlideAnclaMain>
                </div>
            </CardSlide>
            <Cards>
                <OrderSections width="true" overflow="true" id={CardCategories.CardAnclaArray[0]} title="¿Which do you drink coffee?" handleCheck={handleCheck}
                    coffee={coffee} CardCategories={CardCategories.CardDrinkCoffe}
                />
                <OrderSections id={CardCategories.CardAnclaArray[1]} title="¿What type of Coffee?" handleCheck={handleCheck}
                    coffee={coffee} CardCategories={CardCategories.CardTypeCoffee}
                />
                <OrderSections id={CardCategories.CardAnclaArray[2]} title="¿How much would you  like?" handleCheck={handleCheck}
                    coffee={coffee} CardCategories={CardCategories.CardWouldYouLike}
                />
                <OrderSections id={CardCategories.CardAnclaArray[3]} title="¿Want us to grind them?" handleCheck={handleCheck}
                    coffee={coffee} CardCategories={CardCategories.CardGrindThem}
                />
                <OrderSections id={CardCategories.CardAnclaArray[4]} title="¿How often should we deliver?" handleCheck={handleCheck}
                    coffee={coffee} CardCategories={CardCategories.CardDelivere}
                />
                <button onClick={handleSendCoffee}>
                    Send
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.7242 2.97297C26.5897 2.84704 26.4198 2.75986 26.2345 2.72166C26.0492 2.68347 25.8561 2.69585 25.678 2.75736L3.75835 10.257C3.56931 10.3244 3.40656 10.4444 3.29171 10.601C3.17687 10.7575 3.11536 10.9433 3.11536 11.1335C3.11536 11.3237 3.17687 11.5094 3.29171 11.666C3.40656 11.8226 3.56931 11.9425 3.75835 12.01L13.3233 15.6098L17.1493 24.6094C17.2212 24.7794 17.3444 24.9259 17.5037 25.0309C17.6631 25.1358 17.8516 25.1946 18.046 25.2C18.2473 25.1961 18.4427 25.1349 18.6063 25.0244C18.77 24.914 18.8942 24.7594 18.9626 24.5812L26.9334 3.95729C27.0013 3.79144 27.0177 3.61084 26.9806 3.43656C26.9436 3.26228 26.8546 3.1015 26.7242 2.97297ZM18.046 21.6376L15.2662 15.0755L20.0387 10.5851L18.6338 9.26327L13.8215 13.7912L6.88689 11.1382L24.3529 5.2041L18.046 21.6376Z" fill="white" />
                    </svg>
                </button>
                <button type="button" onClick={() => router.push('/Order')}>
                    Click me
                </button>
                {validation &&
                    <p>Hey debes llenar el formulario</p>
                }
            </Cards>
        </CardMain>
    )
}