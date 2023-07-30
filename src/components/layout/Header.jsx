import "./styles.scss";
import { Link } from "react-router-dom";
const LOGO_URL =
  "https://bluegrid.io/wp-content/themes/bluegrid/images/bluegrid-logo.svg?x55882";

export default function Header({ headerTitle, headerButton }) {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={LOGO_URL} alt="" />
        </Link>
      </div>
      <div className="header-title">
        <div>
          <h1>{headerTitle}</h1>
        </div>
        <div style={{ paddingTop: "3px" }}>{headerButton}</div>
      </div>
      <div className="header-nav">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
