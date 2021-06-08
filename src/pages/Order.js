import React, { useEffect, useState } from 'react'

const Order = () => {
    const [list, setList] = useState({})

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('order'))
        const hasLocalData = list ? setList(list) : null
        return hasLocalData
    }, [])

    const CardCategories = {
        CardDrinkCoffe: ['Coffee_Latte', 'Coffee_Large', 'Coffee_capuccino', 'Coffee_Espresso', 'Coffee_American',],
        CardTypeCoffee: ['origin', 'decaf', 'blended'],
        CardWouldYouLike: ['_200g', '_500g', '_1000g'],
        CardGrindThem: ['wholebean', 'filter', 'cafetiere'],
        CardDelivere: ['Every_week', 'Every_2_week', 'Every_month'],
    };

    return (
        <div>
            <h1>Your Orders</h1>
            <div>
                {list.Coffee_Latte && <h3>{CardCategories.CardDrinkCoffe[0]}</h3>}
                {list.Coffee_Large && <h3>{CardCategories.CardDrinkCoffe[1]}</h3>}
                {list.Coffee_capuccino && <h3>{CardCategories.CardDrinkCoffe[2]}</h3>}
                {list.Coffee_Espresso && <h3>{CardCategories.CardDrinkCoffe[3]}</h3>}
                {list.Coffee_American && <h3>{CardCategories.CardDrinkCoffe[4]}</h3>}
                {list.origin && <p><b>Type:</b>{CardCategories.CardTypeCoffee[0]}</p>}
                {list.decaf && <p><b>Type:</b>{CardCategories.CardTypeCoffee[1]}</p>}
                {list.blended && <p>{CardCategories.CardTypeCoffee[2]}</p>}
                {list._200g && <p>{CardCategories.CardWouldYouLike[0]}</p>}
                {list._500g && <p>{CardCategories.CardWouldYouLike[1]}</p>}
                {list._1000g && <p>{CardCategories.CardWouldYouLike[2]}</p>}
                {list.wholebean && <p>{CardCategories.CardGrindThem[0]}</p>}
                {list.filter && <p>{CardCategories.CardGrindThem[1]}</p>}
                {list.cafetiere && <p>{CardCategories.CardGrindThem[2]}</p>}
                {list.Every_week && <p>{CardCategories.CardDelivere[0]}</p>}
                {list.Every_2_week && <p>{CardCategories.CardDelivere[1]}</p>}
                {list.Every_month && <p>{CardCategories.CardDelivere[2]}</p>}

            </div>
        </div>
    )
}
export default Order