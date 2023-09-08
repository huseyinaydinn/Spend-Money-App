import React from 'react'
import BasketItem from "./BasketItem"
import '../App.css'

function Basket({ basket, products, total }) {
    return (
        <div className="basket" >
            {basket.map((item, index) => (
                <BasketItem key={index} item={item} product={products.find(p => p.id === item.id)} />
            )

            )}
            <hr className="hr" />
            <div className="total-price">
                Toplam: ${total}
            </div>
        </div>
    )
}

export default Basket