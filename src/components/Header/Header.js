import React, { useState } from "react";
import "./styles";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import navigation from "../../navigation";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          BookShelf App
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {navigation.left.map((nav) => {
              return (
                <NavItem>
                  <NavLink tag={Link} to={nav.to}>
                    {nav.title}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
          {navigation.right.map((nav) => {
            return (
              <NavbarText>
                <NavLink tag={Link} to={nav.to}>
                  {nav.title}
                </NavLink>
              </NavbarText>
            );
          })}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
