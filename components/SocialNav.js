import styled from "emotion/react";
import FontAwesome from "react-fontawesome";

const Nav = styled.ul`
  position: absolute;
  top: 4rem;
  right: 0;
  margin: 0;
  padding: 0;
  & li {
    display: inline;
  }
  & li a {
    color: black;
    text-decoration: none;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 960px) {
    top: 2.2rem;
  }
`;

const SocialNav = () =>
  <Nav>
    <li>
      <a href="https://twitter.com">
        <FontAwesome name="twitter" />
      </a>
    </li>
    <li>
      <a href="https://instagram.com">
        <FontAwesome name="instagram" />
      </a>
    </li>
    <li>
      <a href="https://vimeo.com">
        <FontAwesome name="vimeo" />
      </a>
    </li>
  </Nav>;

export default SocialNav;
