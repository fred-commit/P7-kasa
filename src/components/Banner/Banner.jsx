import "./Banner.scss";

// On paramètre on met les props qu'on utilise dans la fonction  qui sont utilisés dans le parent "Home"
function Banner({ title, picture }) {
  return (
    <div className="wrapper-banner">
      <img
        className="wrapper-banner__img"
        src={picture}
        alt="Paysage montagneux"
      />
      <div className="wrapper-banner__background">
        <div className="wrapper-banner__title">{title}</div>
      </div>
    </div>
  );
}

export default Banner;
