import "./header.css";
import NavBar from '../components/NavBar'

const Header = () => {
  return (
    <header className="header">
      <div className="header-filter"></div>
      <NavBar />
      <div className="hero">
        <h1>
          {" "}
          <span>{"Hello I'm"}</span> <br />
          Melody Ignatius Ibu
        </h1>
        <p>YOU CAN FIND OUT ABOUT ME HERE</p>
      </div>
    </header>
  );
};

export default Header;
