import styled from "emotion/react";
import FontAwesome from "react-fontawesome";

const Nav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  & li {
    display: block;
    padding-left: 20px;
    border-top: 1px solid #f2f2f2;
    &:last-child {
      border-bottom: 1px solid #f2f2f2;
    }
  }
  & li a {
    color: black;
    text-decoration: none;
    line-height: 2.4rem;
  }
  & .label {
    padding-left: 1rem;
  }
  @media (min-width: 800px) {
    position: absolute;
    top: 4rem;
    right: 0;
    & li {
      display: inline;
      padding-left: 0;
      border-bottom: none;
      border-top: none;
      &:last-child {
        border-bottom: none;
      }
    }
    & li a {
      color: ${props => (props.theme === "transparent" ? "white" : "black")};
      padding-left: 20px;
      padding-right: 20px;
      line-height: 1em;
    }
    & li a span.label {
      display: none;
    }
  }
  @media (min-width: 960px) {
    top: 2.2rem;
  }
`;

const SocialNav = ({ theme }) =>
  <Nav theme={theme}>
    <li>
      <a href="https://twitter.com" target="_blank">
        <FontAwesome name="twitter" />
        <span className="label">SLR Magic on Twitter</span>
      </a>
    </li>
    <li>
      <a href="https://instagram.com" target="_blank">
        <FontAwesome name="instagram" />
        <span className="label">SLR Magic on Instagram</span>
      </a>
    </li>
    <li>
      <a href="https://vimeo.com" target="_blank">
        <FontAwesome name="vimeo" />
        <span className="label">SLR Magic on Vimeo</span>
      </a>
    </li>
  </Nav>;

export default SocialNav;
