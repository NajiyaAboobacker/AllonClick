"use client"
import Link from 'next/link'
import { CartItem } from '../types/cart';

import { useContext } from 'react';
import {useCart} from '../Contexts/CartContext';
function OfferProducts(props:any) {
    var prod = props.product;
    
    const {addToCart} =useCart();
    
    const offerPrice = Math.floor(prod.price - 5)*1000/1000;
    
    
    const handleAddToCart = () => {
            const item: CartItem = {
            ...prod,
            quantity: 1,
            price:offerPrice
            };
            addToCart(item);
        };
    return ( 
        <div className = "card products-item ms-3 my-5 w-25 p-2 text-center "  >
            <div >
                <img src={prod.image} height = {200}  />
            </div>
            <div>
                <Link href ={"/Products/"+prod.id}>
                <h6>{prod.title}</h6></Link>
                </div>
          
            <div ><h4 style={{ textDecoration: 'line-through', color: 'red' }}>Rs.{prod.price}</h4></div>
            <div><b>Rs.{offerPrice} </b> </div>
            <div>
            
                <button  onClick= {()=>{
                    handleAddToCart()}}>Add To Cart</button>
            </div>
        </div>
     );
}

export default OfferProducts;