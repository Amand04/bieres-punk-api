import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "./../International Beer Day-amico.png";

const App = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    (async function () {
      const url = "https://api.punkapi.com/v2/beers?page=2&per_page=25";

      const response = await fetch(url);
      const beersFromApi = await response.json();
      console.log(beersFromApi);
      setBeers(beersFromApi);
      console.log(beersFromApi.beer);
    })();
  }, []);

  return (
    <>
      <img src={image} className="story" alt="the beer" />

      <div className="app beers">
        <h2 className="title m-5">Nos bières</h2>

        <div className="list-beers">
          {beers.map((beer) => (
            <div className="beer" key={beer.id}>
              <h3 className="name m-4 text-center">
                <Link className="name" to={"/beers/" + beer.id}>
                  {beer.name}
                </Link>
              </h3>
              <h4 className="first_brewed ms-3 text-center">
                {beer.first_brewed}
              </h4>
              <h4 className="tagline ms-4 mb-4 text-center">{beer.tagline}</h4>
              <img src={beer.image_url} className="imageA" alt="the beer" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
