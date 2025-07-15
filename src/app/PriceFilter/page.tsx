
import React,{Suspense} from 'react'
import { ProductsService } from '../Services/products-service';
import ProductCard from '../components/Product-card/ProductCard';
import Productfilter from '../components/ProductFilter/Productfilter';
export default async function PriceFilter(props:any) {

var products = await ProductsService. getProducts();
const pricelimit = props.searchParams.pricelimit;

  return (
    <div className='d-flex container'>
            <div className=' m-1 ' style={{width : 200}} ><Productfilter/></div> 
           
            <div className=''  style={{width : 1000}} >
              <h3 className=' m-3 text-da '>Products with Price Less than {pricelimit}</h3>
              <div className='d-flex flex-wrap'>
                {
                    
                    products.map((p:any) => {
                        if(p.price<=pricelimit ){
                        return <ProductCard key={p.id} product={p} />}
                        
                    })
                }
              </div> 
            
            </div>
            
        </div>
  )


}
