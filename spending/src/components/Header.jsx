import React from 'react'
import AddMoney from "./AddMoney"
import '../App.css'

export const Header = ({ total, money, setMoney }) => {

    const moneyFormatter = (money) => {
        return money.toLocaleString()
    }

    return (
        <div className="headerContainer" >
            {total > 0 && money - total !== 0 && (
                <>Harcayacak {moneyFormatter(money - total)}$ paranız kaldı!</>
            )}
            {
                total === 0 && (
                    <>Harcamak için {moneyFormatter(money)}$ paranız var!</>
                )
            }

            {money - total === 0 && (<>Paranız bitti. Parasız insan boş insandır!</>)}
            <AddMoney setMoney={setMoney} money={money} />
        </div >
    )
}

