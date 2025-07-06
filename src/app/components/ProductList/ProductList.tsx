'use client';

import { useSearchParams } from 'next/navigation';
import ProductCard from '../Product-card/ProductCard';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  const searchParams = useSearchParams();
  const search = searchParams.get('search')?.toLowerCase() || '';

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );

  return (
    <div className="d-flex flex-wrap">
      {filtered.length > 0 ? (
        filtered.map((p) => <ProductCard key={p.id} product={p} />)
      ) : (
        <p className="text-muted m-3">No matching products found.</p>
      )}
    </div>
  );
}
