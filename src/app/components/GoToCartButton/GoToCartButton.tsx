"use client"
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import CartStatus from '../CartStatus/CartStatus';

export default function cartButton() {
        const router = useRouter();
  return (
    <div>
         <button className='mt-2 ' onClick={() => {
          router.push(`cart`)
          }}  >  
           < FaCartArrowDown className='bg-dark' height="500px" width="500px" color="white" fontSize="35px"/> 
           
          </button>
         
          {/* <Link href="/cart">🛒 Cart</Link> */}
    </div>
  )
}
