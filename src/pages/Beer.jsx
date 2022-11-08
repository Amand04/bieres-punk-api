import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import icone from "./../arrow_left.svg";

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    (async function () {
      const url = "https://api.punkapi.com/v2/beers/" + id;

      const response = await fetch(url);
      const beerFromApi = await response.json();
      console.log(beerFromApi);
      setBeer(beerFromApi);
    })();
  }, [id]);

  return (
    <>
      <Link to={"/"} id="btn_accueil" className="btn btn-primary">
        <img src={icone} className="icone" alt="arrow" />
      </Link>
      <div className="list-beers">
        {beer.map((beer) => (
          <div className="beer" key={beer.id}>
            <h4 className="name m-3 mt-3 text-center">{beer.name}</h4>
            <h4 className="first_brewed m-3 text-center">
              {beer.first_brewed}
            </h4>
            <h4 className="tagline m-2 text-center">{beer.tagline}</h4>
            <h4 className="description m-2 text-center">{beer.description}</h4>
            <h4 className="abv m-2 text-center">degrés:{beer.abv} °</h4>
            <h4 className="fermentation m-2 mb-5 text-center">
              fermentation:{beer.method.fermentation.temp.value}°
            </h4>
            <div className="container-fluid">
              <img src={beer.image_url} className="image mb-5" alt="the beer" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Beer;
