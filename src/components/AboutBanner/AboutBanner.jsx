import "./AboutBanner.scss";

// On paramètre on met la prop qu'on utilise dans la fonction qui est utilisée dans le parent "About"
function AboutBanner({ picture }) {
  return (
    <div className="wrapper-banner">
      <img
        className="wrapper-banner__img"
        src={picture}
        alt="Paysage montagneux"
      />
      <div className="wrapper-banner__background"></div>
    </div>
  );
}

export default AboutBanner;
