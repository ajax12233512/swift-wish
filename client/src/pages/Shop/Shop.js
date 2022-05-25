import React from 'react'
import './Shop.css'
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'

function Shop() {
  return (
    <div>
        <Navbar />
        <h1>Shop</h1>
        <div className='shop-card-ctn'>
            <Card name="Card" description="Card 1 description"/>
            <Card name="Card" description="Card 1 description"/>
            <Card name="Card" description="Card 1 description"/>
            <Card name="Card" description="Card 1 description"/>
            <Card name="Card" description="Card 1 description"/>
            <Card name="Card" description="Card 1 description"/>
        </div>
    </div>
  )
}

export default Shop