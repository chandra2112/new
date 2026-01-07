const API_URL = "http://localhost:5000/api/products";

export async function getProducts() {
  const res = await fetch(API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(
    `http://localhost:5000/api/products/${id}`,
    { cache: "no-store" },
    {next: { revalidate: 0 }}
  );

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

