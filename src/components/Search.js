import React, {useState} from "react";

function Search({listings, setSearch}) {
  // const [search, setSearch] = useState()

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    // onSearch(e.target.value)
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }
  

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={listings.description}
        onChange={handleSearch}
   
      />
      <button onSubmit={handleSubmit} type="submit">🔍</button>
    </form>
  );
}

export default Search;


     // onChange={(e) => handleSearch(e.target.value)}