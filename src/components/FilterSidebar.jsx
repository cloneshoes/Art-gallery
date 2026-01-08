import { useFilter } from "../context/FilterContext";

export default function FilterSidebar() {
  const { medium, setMedium, maxPrice, setMaxPrice } = useFilter();

  return (
    <aside className="w-full md:w-64 text-white text-xs tracking-widest space-y-8">
      <div>
        <h3 className="mb-4 text-gray-400">MEDIUM</h3>
        {["all", "oil", "digital", "sculpture"].map((item) => (
          <button
            key={item}
            onClick={() => setMedium(item)}
            className={`block mb-2 uppercase ${
              medium === item ? "text-white" : "text-gray-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div>
        <h3 className="mb-4 text-gray-400">MAX PRICE</h3>
        <input
          type="range"
          min="500"
          max="10000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full"
        />
        <p className="mt-2 text-gray-500">${maxPrice}</p>
      </div>
    </aside>
  );
}
