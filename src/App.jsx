import { useState } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
import FilterBar from "./components/filterbar";
import ProductList from "./components/productlist";
import { products } from "./dataarray/products";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  // Filtering
  let filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category ? p.category === category : true));

  // Sorting
  if (sort === "low-high") filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === "high-low") filteredProducts.sort((a, b) => b.price - a.price);
  if (sort === "rating") filteredProducts.sort((a, b) => b.rating - a.rating);

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

        <ProductList filteredProducts={filteredProducts} />
      </div>
    </div>
  );
}

