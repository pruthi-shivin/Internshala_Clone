import "../styles/navbar.css";

const Navbar = ({
  darkMode,
  setDarkMode,
}) => {

  return (
    <div className="navbar">

      <h2 className="logo">
        Internshala
      </h2>

      <button
        className="dark-btn"
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        {darkMode
          ? "Light Mode"
          : "Dark Mode"}
      </button>

    </div>
  );
};

export default Navbar;