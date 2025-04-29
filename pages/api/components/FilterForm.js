export default function FilterForm({ region, onRegionChange }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
        className="p-2 rounded border border-gray-300 w-full max-w-md"
        placeholder="Enter city or zip code"
      />
    </div>
  );
}
