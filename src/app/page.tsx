import { OfferProds } from './OfferProducts/products';
import ProductCard from './components/Product-card/ProductCard';
import OfferProductsHandle from './components/OfferProductsHandle/OfferProductsHandle';

export default function HomePage() {
  return (
    <div >
    
       <div className='w-100' style={{ paddingBottom:'70px'}}><img src = "banner.jpg" height={400} width= '100%' className='"img-fluid"' /></div> 
      
      
        <div className='container'><h3 className='text-white text-center mt-1 p-3' style={{backgroundColor:"rgb(47, 20, 104)"}}>  -------------- Offer Products --------------  </h3>
            <div className='d-flex flex-wrap'>
                  {OfferProds.map((p) => { 
                      return <OfferProductsHandle key={p.id} product={p}/>
                  })}
            </div>
        </div>
    
    </div>
    
  );
}

