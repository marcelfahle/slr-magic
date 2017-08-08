import styled from "emotion/react";
import FontAwesome from "react-fontawesome";
import NavItem from "./NavItem";

const NavTrigger = styled.label`
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 1.6rem;
  right: 1rem;
  cursor: pointer;
  & span.fa {
    display: inline-block;
    width: 2rem;
    height: 2rem;
  }

  & span.fa.close-menu {
    display: none;
  }
  & + input {
    display: none;
  }
  & + input:checked ~ nav {
    max-height: 500px;
  }
`;

const Nav = styled.nav`
  max-height: 0;
  transition: max-height 0.8s linear;
  overflow: hidden;
  padding-top: 1rem;

  @media (min-width: 800px) {
    display: inline-block;
    position: absolute;
    left: auto;
    transform: 0;
    right: 20px;
  }
  @media (min-width: 960px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
const NavItems = styled.ul`
  padding-left: 0;
  margin: 0;
  @media (min-width: 800px) {
    margin: 34px 0 0 0;
  }
`;

const MainNav = () =>
  <div>
    <NavTrigger htmlFor="nav-trigger">
      <FontAwesome name="bars" size="2x" />
    </NavTrigger>
    <input type="checkbox" id="nav-trigger" />
    <Nav role="navigation">
      <NavItems>
        <NavItem to="/" label="Home" />
        <NavItem to="/products" label="Products" />
        <NavItem to="/distributors" label="Distributors" />
        <NavItem to="/faq" label="FAQ" />
        <NavItem to="/contacts" label="Contacts" />
      </NavItems>
    </Nav>
  </div>;

export default MainNav;