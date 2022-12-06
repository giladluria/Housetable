export default function Searchbar({ onSearch }) {
  return (
    <div className="searchbarContainer">
      <input
        placeholder="Search a city"
        onChange={onSearch}
        className="searchbar"
      />
      <img src="/search.png" alt="search" className="searchbarImage" />
    </div>
  );
}
