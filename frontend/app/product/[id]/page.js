import { getProductById } from "../../../lib/api";

export default async function ProductDetails({ params }) {
  // ✅ unwrap params ONCE
  const { id } = await params;

  const product = await getProductById(id);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover rounded"
      />

      <h1 className="text-3xl font-bold mt-6">
        {product.title}
      </h1>

      <p className="text-gray-600 mt-2">
        {product.description}
      </p>

      <p className="text-2xl font-semibold text-blue-600 mt-4">
        ₹{product.price}
      </p>
    </div>
  );
}
