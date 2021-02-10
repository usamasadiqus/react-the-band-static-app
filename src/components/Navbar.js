const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#myPage">
            Logo
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#myPage">HOME</a>
            </li>
            <li>
              <a href="#band">BAND</a>
            </li>
            <li>
              <a href="#tour">TOUR</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                MORE
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Merchandise</a>
                </li>
                <li>
                  <a href="#">Extras</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-search" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
