"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Productfilter(props:any) {
    const router = useRouter();
    const [SelectedPrice, setSelectedPrice] = useState<string>();
   

// const priceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//    // setSelectedPrice(event.target.value);
//     router.push(`PriceFilter`)
    
//   };
    
const FilterPrice =(p:any) =>{
    let searchParams = '';
    searchParams = searchParams +'pricelimit='+p;
   
    router.push('/PriceFilter?'+searchParams)
   
}

 return (
    <div className='mt-5'><h3 className='fs-4 text-primary'>Price Filter</h3>
        
         <input type="radio"  name="priceOptions" value = "Below 100" onChange={()=>{

            {FilterPrice(100)};
            }}/><label className='m-3'>Price less than 100</label><br/>
         <input type="radio"  name="priceOptions" value = "Below 500" onChange={()=>{

            {FilterPrice(500)};
            }}/><label className='m-3'>Price less than 500</label><br/>
         <input type="radio"  name="priceOptions" value = "Below 1000" onChange={()=>{

            {FilterPrice(1000)};
            }}/><label className='m-3'>Price less than 1000</label><br/>
         {/* <button className='btn btn-warning' onClick={Filter}>Rough</button> */}

    </div>
    
  )
}
