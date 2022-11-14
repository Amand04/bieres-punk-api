import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "./../International Beer Day-amico.png";
import Pagination from "../components/Pagination.jsx";

const App = (pageNumber) => {
  const [beers, setBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage] = useState(15);

  useEffect(() => {
    (async function () {
      const url = "https://api.punkapi.com/v2/beers";

      const response = await fetch(url);
      const beersFromApi = await response.json();
      console.log(beersFromApi);
      setBeers(beersFromApi);
    })();
  }, []);

  //get current posts
  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <img src={image} className="story" alt="the beer" />
      <h2 className="title mb-5">La collection</h2>

      <div className="app beers">
        <div className="list-beers">
          {currentBeers.map((beer) => (
            <div className="beer" key={beer.id}>
              <h3 className="name text-center">
                <Link className="name" to={"/beers/" + beer.id}>
                  <img
                    src={beer.image_url}
                    className="imageA mt-5"
                    alt="the beer"
                  />
                  {beer.name}
                </Link>
              </h3>
              <h4 className="first_brewed text-center">{beer.first_brewed}</h4>
              <h4 className="tagline ms-4 text-center">{beer.tagline}</h4>
            </div>
          ))}
        </div>
        <Pagination
          beersPerPage={beersPerPage}
          totalBeers={beers.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default App;
