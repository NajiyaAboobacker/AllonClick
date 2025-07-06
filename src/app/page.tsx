import { OfferProds } from './OfferProducts/products';
import ProductCard from './components/Product-card/ProductCard';
import OfferProductsHandle from './components/OfferProductsHandle/OfferProductsHandle';

export default function HomePage() {
  return (
    <div >
    <main>
       <>
       {/* <div className='w-100' style={{ paddingBottom:'70px'}}><img src = "banner.jpg" height={350} width= '100%' className='"img-fluid"' /></div> */}
      <div className ="row"  >
                      <div className="col">
                          <div id="carouselExampleIndicators" className="carousel slide" >
                              <div className="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                              </div>
                              <div className="carousel-inner" >
                              <div className="carousel-item active" >
                                  <img src={"carousel1.jpg"} className="d-block w-100" alt="..." height={350} /> 
                              </div>
                              <div className="carousel-item" >
                                  <img src={"carousel2.jpg"} className="d-block w-100" alt="..." height={320}/>
                              </div>
                              <div className="carousel-item">
                                  <img src={"carousel3.jpg"} className="d-block w-100" alt="..." height={320}/>
                              </div>
                              </div>
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                              </button>
                          </div>
                      </div>
       </div>
      
      <div className='container'>
        <h3 className='text-danger mt-5'><u> Offer Product List</u></h3>
        
        <div className='d-flex flex-wrap'>
                  {OfferProds.map((p) => { 
                      return <OfferProductsHandle key={p.id} product={p}/>
                  })}
              </div>

      
      </div>
      </>
    </main>
    </div>
    
  );
}

