import Link from "next/link";
import styled from "emotion/react";
//import { mediaQueries } from "./globalStyles";

const Item = styled.li`
  display: block;
  font-weight: bold;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 20px;
  border-top: 1px solid #f2f2f2;
  &:last-child {
    border-bottom: 1px solid #f2f2f2;
  }
  & a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-size: 0.812rem;
    line-height: 2.4rem;
  }

  @media (min-width: 800px) {
    display: inline-block;
    padding-right: 20px;
    border-top: none;
    & a {
      line-height: 1em;
    }
    &:last-child {
      padding-right: 0;
      border-bottom: none;
    }
  }
`;

const NavItem = ({ to, label }) =>
  <Item>
    <Link href={to}>
      <a>
        {label}
      </a>
    </Link>
  </Item>;

export default NavItem;
