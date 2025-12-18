import "./Header.css";
import professionalPicture from "../images/professional_picture.jpg";

const Header = () => {
  return (
    <>
      <h1 className="main-header">
        Anthony Hutson, Aspiring Software Developer. I promise I'm not in love with Bradley Miller.
      </h1>
      <h2 className="tagline">
        <em>“Make today a great day!”</em>
      </h2>
      <div>
        <img
          className="photo"
          src={professionalPicture}
          alt="Picture of Anthony in a Fancy Suit"
        ></img>
      </div>
    </>
  );
};

export default Header;
