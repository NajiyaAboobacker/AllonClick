import { OfferProds } from './OfferProducts/products';
import ProductCard from './components/Product-card/ProductCard';
import OfferProductsHandle from './components/OfferProductsHandle/OfferProductsHandle';

export default function HomePage() {
  return (
    <div >
    
       <div className='w-100' style={{ paddingBottom:'70px'}}><img src = "banner.jpg" height={350} width= '100%' className='"img-fluid"' /></div> 
      
      
        <div className='container'><h3 className='text-danger mt-5'><u> Offer Product List</u></h3>
            <div className='d-flex flex-wrap'>
                  {OfferProds.map((p) => { 
                      return <OfferProductsHandle key={p.id} product={p}/>
                  })}
            </div>
        </div>
    
    </div>
    
  );
}

