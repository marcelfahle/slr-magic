import Link from "next/link";
import styled from "emotion/react";

const A = styled.a`
  display: inline-block;
  margin-top: 26px;
  padding-left: 20px;
`;
const Logo = styled.img`width: 190px;`;

const HomeLink = () =>
  <Link href="/">
    <A>
      <Logo src="/static/slrmagic-logo.png" alt="Back to Home" />
    </A>
  </Link>;

export default HomeLink;
