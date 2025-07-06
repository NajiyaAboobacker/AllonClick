import React, { Suspense } from 'react'
import ProductList from '../components/ProductList/ProductList';
import { ProductsService } from '../Services/products-service';
import Productfilter from '../components/ProductFilter/Productfilter';


export default async function Products() {
  console.log("Product Page");
  var products = await ProductsService.getProducts();
  return (
    <div className='container d-flex'>
      
        <div className=' m-1 ' style={{width : 200}} ><Productfilter/></div> 
        
      <div className=''  style={{width : 1000}} >
          <h3 className=' m-3 '>Product List</h3>  
          <ProductList products={products} />
        </div>
    </div>
  )
}
