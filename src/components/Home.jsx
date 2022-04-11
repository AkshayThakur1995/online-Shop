import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cartSlice'
import { productsFetch } from '../features/productsSlice'
import {useNavigate} from "react-router-dom"
function Home() {
const {items, status} = useSelector(state => state.products)
const inside = useSelector(state => state)
const navigate = useNavigate()
const dispatch = useDispatch()
useEffect(() => {
    dispatch(productsFetch())
},[])



    if(status === "pending"){
        return <h2>Loading....</h2>
    }

const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    navigate("/cart")
}


return (
    <div className='home-container'>
        {<>
        <h2>New arrival</h2>
        <div className='products'>
        {items[0]?.map((product) => <div className='product' key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name}></img>
            <div className='details'>
                <span>{product.desc}</span>
                <span className='price'>${product.price}</span>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>)}
        </div>
        </>}
    </div>
  )
}

export default Home