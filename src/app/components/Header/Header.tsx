"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import GoToCartButton from '../GoToCartButton/GoToCartButton'
import CartStatus from '../CartStatus/CartStatus'
import { useRouter } from 'next/navigation';

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
        router.push(`/Products?search=${encodeURIComponent(searchTerm)}`);
        }
    };
  return (
    <>
        <div className=' d-flex   fixed-top' style={{ zIndex: 1030, padding: '10px 0', backgroundColor:"rgb(47, 20, 104)"}} >
      
        <img src = "Logo.jpg" width = "50" height = "50"  className='opac ' style={{marginLeft:120}}></img>
        <nav >
            <ul className="nav " style={{marginLeft:120}}>
            <li className="nav-item mt-1 ">
                <Link className="nav-link active text-white" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item mt-1">
                <Link className="nav-link text-white" href="/AboutUs">About Us</Link>
            </li>
            <li className="nav-item mr-5 mt-1">
                <Link className="nav-link text-white" href="/ContactUs">Contact Us</Link>
            </li>
             <li className="nav-item mr-5 mt-1">
                <Link className="nav-link text-white" href="/Products">Products</Link>
            </li>
            
            
            <li className="navbar navbar-light d-flex">
            <form className="form-inline d-flex pr-5" onSubmit={handleSearch}>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="btn btn-outline-success btn-dark my-2 my-sm-0 text-white mx-4"
                    type="submit"
                >
                    Search
                </button>
            </form>
            </li>
            <li>
                <div style={{marginLeft:120}}>
                     <GoToCartButton/>
                </div>
               
            </li>
            <li>
                 <div>
                     <CartStatus />
                </div>
            </li>
            </ul>
          
        </nav>
        </div>
      
   
    </>
  )
}
