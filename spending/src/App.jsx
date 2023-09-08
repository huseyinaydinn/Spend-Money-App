import { useEffect, useState } from 'react'
import './App.css'
import { Header } from "./components/Header"
import products from "./products.json"
import Product from './components/Product'
import Basket from "./components/Basket"
import { Grid } from "@mui/material"

function App() {
  const [money, setMoney] = useState(80000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))

  }, [basket])

  const resetBasket = () => {
    setBasket([])
  }



  return (
    <div className="App">
      <Header total={total} money={money} setMoney={setMoney} />
      <div className="container">
        {
          products.map((product) => (
            <Product total={total} money={money} product={product} basket={basket} setBasket={setBasket} key={product.id} />
          ))
        }
      </div>


      <div className="total">
        <h5>Alışveriş Detayları</h5>
        <Basket basket={basket} products={products} total={total} />
        <button className="reset-basket" onClick={resetBasket}>Sepeti Sıfırla</button>
      </div>

    </div>
  )
}

export default App
