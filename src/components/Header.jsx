import reactImg from "../assets/react-core-concepts.png";
const reactDesc = ["Fundamental", "Core", "Crucial"];
import "./Header.css";

function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const store = reactDesc[getRandom(2)];
  return (
    <header>
      <img src={reactImg} />
      <h1>React Essentials</h1>
      <p>
        {store} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

export default Header;
