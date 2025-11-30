export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-120 object-cover rounded-lg"
      />

      <h2 className="mt-2 font-semibold text-lg">{product.name}</h2>
      <p className="font-medium text-gray-700">₹ {product.price}</p>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="font-medium text-yellow-600">⭐ {product.rating}</p>

      <button
        onClick={() => console.log("Added to cart:", product.name)}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
