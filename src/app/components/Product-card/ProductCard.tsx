
"use client"
import React, { useEffect,useState } from 'react'
import { useCart } from '../Contexts/CartContext';
import Link from 'next/link';
import { CartItem } from '../types/cart';

export default function ProductCard(props:any) {
    var prod = props.product; 
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const item: CartItem = {
        ...prod,
        quantity: 1,
        };
        addToCart(item);
    };
    return (
        <div className='d-flex flex-column align-items-center border border-1 mb-5 '>
            <Link href={'/Products/'+ prod.id}>
            <div  className='m-3 ' style={{width : 200}}>               
                <img className="mx-auto d-block mb-2" src = {prod.image} width={50}/>               
                { 
                <h6 className='m-2 text-center'>{prod.title}</h6>  
                            
                }
                <h5 className='text-dark text-center'>{prod.price} </h5>   
            </div>
            </Link>
            <div >
                 <button className="btn text-white" style={{backgroundColor:"rgb(47, 20, 104)"}} onClick={handleAddToCart}>Add to Cart</button>
            </div>
           
        </div>
      
      
        )
}
