import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cart_icon from "../Components/Assets/cart_icon.png";
import { ShopContext } from "../Context/ShopContext";



function NavScrollExample() {

  const{getTotalCartItems} = useContext(ShopContext)



  return (
    <Navbar expand="lg" className="Navbar-content bg-body-tertiary " style={{ height: "80px" }}> {/* Adjust the height */}
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"} style={{ marginLeft: "3.4rem", marginRight:"2rem" }}> {/* Add margin to the left */}
          GOJO SHOPS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", fontWeight:"600", fontSize:"1.15rem"}}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/wishlist"}>
              Wishlist
            </Nav.Link>
            <Nav.Link as={Link} to={"/order"}>
              Order
            </Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="mens">Mens</NavDropdown.Item>
              <NavDropdown.Item href="womens">Womens</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="kids">Kids</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "25rem" }}
            />
            <Button
              variant="outline-success"
              style={{ marginRight: "40px", marginLeft: "3px" }} // Adjust the margin
            >
              Search
            </Button>
            <div className="nav-login-cart">
              <Link to="/Log">
                <button>Login</button>
              </Link>
              <Link to="/cart">
                <img src={cart_icon} alt="" />
              </Link>
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
