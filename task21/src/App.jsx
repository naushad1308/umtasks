
import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])





  return (
    <>
      <h1 className='text-center text-white pt-5 text-lg font-bold '>All the Cards are here</h1>
      <div className="cardContainer p-5 w-full flex justify-between flex-wrap ">
        <Card products={products} />
      </div>

    </>
  )
}

export default App
