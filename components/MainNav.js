import styled from "emotion/react";
import FontAwesome from "react-fontawesome";
import NavItem from "./NavItem";
import SocialNav from "./SocialNav";

const NavTrigger = styled.label`
  position: absolute;
  z-index: 1000;
  width: 2rem;
  height: 2rem;
  top: 1.6rem;
  right: 1rem;
  cursor: pointer;
  & span.fa {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    color: ${props =>
      props.theme === "dark" ||
      (props.theme === "transparent" && !props.mobileMenu)
        ? "white"
        : "black"};
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

  @media (min-width: 800px) {
    display: none;
  }
`;

const Nav = styled.nav`
  max-height: 0;
  transition: max-height 300ms cubic-bezier(0.000, 0.000, 0.580, 1.000);
  transition-timing-function: cubic-bezier(0.000, 0.000, 0.580, 1.000);
  overflow: hidden;
  padding-top: 1rem;
  background: ${props => (props.theme ? props.theme : "transparent")};
  @media (min-width: 800px) {
    max-height: none;
    display: inline-block;
    position: absolute;
    left: auto;
    top: 0;
    padding: 0;
    transform: 0;
    height: 80px;
    width: 100%;
    text-align: right;
  }
  @media (min-width: 960px) {
    width: 100%;
    text-align: center;
  }
`;
const NavItems = styled.ul`
  padding-left: 0;
  margin: 0;
  & li a {
    color: black;
  }
  @media (min-width: 800px) {
    margin: 34px 26px 0 0;
    & li a {
      color: ${props =>
        props.theme === "dark" || props.theme === "transparent"
          ? "white"
          : "black"};
    }
  }
  @media (min-width: 960px) {
    margin: 34px 0 0 0;
  }
`;

const MainNav = ({ theme, mobileMenu, toggleMobileMenu }) =>
  <div>
    <NavTrigger theme={theme} mobileMenu={mobileMenu} htmlFor="nav-trigger">
      <FontAwesome name="bars" size="2x" />
    </NavTrigger>
    <input
      type="checkbox"
      id="nav-trigger"
      checked={mobileMenu}
      onChange={toggleMobileMenu}
    />
    <Nav role="navigation" theme={theme}>
      <NavItems theme={theme}>
        <NavItem to="/" label="Home" />
        <NavItem to="/products" label="Products" />
        <NavItem to="/distributors" label="Distributors" />
        <NavItem to="/faq" label="FAQ" />
        <NavItem to="/contacts" label="Contacts" />
      </NavItems>
      <SocialNav theme={theme} />
    </Nav>
  </div>;

export default MainNav;
