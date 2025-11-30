export default function FilterBar({ category, setCategory, sort, setSort }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-4">

      {/* Category Filter */}
      <select
        className="border px-4 py-2 rounded-lg"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Category A">TOPS</option>
        <option value="Category B">Party-wear-dresses</option>
        <option value="Category C">sarees</option>
      </select>

      {/* Sorting */}
      <select
        className="border px-4 py-2 rounded-lg"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="low-high">Price: Low → High</option>
        <option value="high-low">Price: High → Low</option>
        <option value="rating">Rating</option>
      </select>

    </div>
  );
}
