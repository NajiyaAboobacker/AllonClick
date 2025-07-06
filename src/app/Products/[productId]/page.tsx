import Productfilter from '@/app/components/ProductFilter/Productfilter';
import { ProductsService } from '@/app/Services/products-service';
import React from 'react'


export default async function ProductDetails(props:any) {
 
  const productId = props.params.productId;
 
  var product;
  if(productId){
    product = await ProductsService.getProductsById(productId);
  }
  return (

    <div className='m-5 border border-5 p-4 w-50'>
       
          <h3  className='mb-3 text-danger'>Product Details</h3>
          <h5>{product.title}</h5>
          <img src = {product.image} width={200} className='m-5'/>
          
    </div>
  )
}
