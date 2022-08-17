import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")


useEffect(() => {
  fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data) => {
      setListings(data);
    });
}, []);


function deleteListing(listing){
  fetch(`"http://localhost:6001/${listings.id}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(data => setListings((el) => {
    return listings.filter((el) => {
      return el.id !== listing.id
    })
  }))
}


let displayedListings = listings.filter((listing) => {
  return listing.description.toLowerCase().includes(search.toLowerCase())
})



  return (
    <div className="app">
      <Header search={search} listings={listings} setSearch={setSearch}/>
      <ListingsContainer listings={displayedListings} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
