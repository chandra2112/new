import { getProducts } from "../lib/api";
import ProductCard from "@/component/ProductCard";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Product Store
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}
