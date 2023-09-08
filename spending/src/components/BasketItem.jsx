import React from 'react'

function BasketItem({ item, product }) {
    return (
        <div className="product-details">
            <span className="product-name">{product.title}</span> <span className="product-amount">x {item.amount}</span>

        </div>


    )
}

export default BasketItem