import Link from 'next/link';
import { ReactNode } from 'react';
import { CartProvider } from './components/Contexts/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import  "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          
          {/* <header style={{ padding: '10px', background: '#eee' }}>
            <Link href="/">Home</Link> | <Link href="/cart">View Cart</Link>
          </header> */}
          <Header/>
          
          <div className='' style={{ paddingTop: '80px' }}>
          {children}
          </div>
          <Footer/>
         
        </CartProvider>
      </body>
    </html>
  );
}
