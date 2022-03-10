import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

/**
 * Topbar component
 * @returns topbar
 */
export function Topbar() {

  return (
    <Navbar className="navbar">
      <Navbar.Brand>
        <Link to="/home">
          <img src={logo} alt="Oval logo" className="navbar-logo" />
        </Link>
      </Navbar.Brand>
      <Nav>
        <Nav.Link className="h6" as={Link} to="/account">
          Account
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link className="h6" as={Link} to="/wallet">
          Connect Wallet
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
