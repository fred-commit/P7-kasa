//L'import du style associé
import "./Home.scss";

// L'import des composants essentiels
import Banner from "../../components/Banner/Banner";
import ApartmentCard from "../../components/ApartmentCard/ApartmentCard";

// L'import des données
import data from "../../assets/data/data.json";
import bannerImg from "../../assets/img/bannerImg.jpeg";

// L'import de link via...
import { Link } from "react-router-dom";

// Le composant fonction "Home" de la page Home. Parent des composants genérés dans le return
function Home() {
  const bannerTitle = "Chez vous, partout et ailleurs";
  return (
    <div>
      {/* L'utilisation des props title et picture */}
      <Banner title={bannerTitle} picture={bannerImg} />
      <main className="main">
        {data.map((apartment) => {
          /* return generera les liens de redirection des cartes */
          return (
            <Link
              className="main__link"
              //La redirection vers le chemin ci-dessous avec la variable en paramètre (cme défini dans le routeur)
              to={`/apartment/${apartment.id}`}
              // Pour identifier les elements d'une liste de manière unique
              key={apartment.id}
              title={apartment.title}
            >
              {/* Le spread operator pour récupérer toutes les données de chaque appartement mappé.
              Dans le le composant ci-dessous on récupère seulement le "cover" et le "title" mais ça fait plus court */}
              <ApartmentCard {...apartment} />
            </Link>
          );
        })}
      </main>
    </div>
  );
}

//L'export pour réutilisation dans le routeur
export default Home;
