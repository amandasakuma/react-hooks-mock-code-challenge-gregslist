import React from "react";
import Search from "./Search";

function Header({listings, search, setSearch}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings}
        search={search} 
      setSearch={setSearch}/>
    </header>
  );
}

export default Header;
