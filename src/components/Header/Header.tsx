import "./Header.scss";

const Header = () => {
  return (
    <header className={"header"}>
      <div className="header__content__container">
        <div className="header__logo">
          <img width={"200px"} src="ZeroPM logo.svg" alt="ZeroPM Logo" />
        </div>

        <div className="header__text">Zero Pollution of Persistent, Mobile Substances</div>
      </div>
    </header>
  );
};

export default Header;
