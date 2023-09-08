import React from 'react'
import '../App.css'

const Product = ({ basket, setBasket, product, total, money }) => {
    const basketItem = basket.find(item => item.id == product.id)


    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        if (checkBasket) {
            checkBasket.amount -= 1
            if (checkBasket.amount === 0) {
                setBasket([...basketWithoutCurrent])
            } else {
                setBasket([...basketWithoutCurrent, checkBasket])
            }
        }
    }

    return (

        <div className="product">
            <div className="img-div">
                <img src={product.image} alt="" />
            </div>

            <h6>{product.title}</h6>
            <div className="product-price">$ {product.price}</div>
            <div className="actions">
                <button disabled={!basketItem} onClick={removeBasket} className="sellBtn">Sat</button>
                <span className="amount">{basketItem && basketItem.amount || 0}</span>
                <button disabled={total + product.price > money} onClick={addBasket} className="buyBtn">Satın Al</button>
            </div>
        </div>
    )
}

export default Product;