import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product._id}`}>
      <div className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover rounded"
        />

        <h2 className="mt-3 font-semibold text-lg">
          {product.title}
        </h2>

        <p className="mt-2 font-bold text-blue-600">
          ₹{product.price}
        </p>
      </div>
    </Link>
  );
}
