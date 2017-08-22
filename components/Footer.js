import styled from "emotion/react";
import Link from "next/link";
import FontAwesome from "react-fontawesome";
import HomeLink from "./HomeLink";

const FooterWrapper = styled.footer`
  padding-top: 78px;
  background: #f7f7f7;
  & a {
    color: #444;
    text-decoration: none;
  }
`;
const Logo = styled.img`
  vertical-align: top;
  max-width: 180px;
  margin-bottom: 20px;
  @media (min-width: 720px) {
    max-width: 120px;
    margin-bottom: 10px;
  }
  @media (min-width: 840px) {
    max-width: 140px;
    margin-bottom: 20px;
  }
`;
const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1170px;
  & p {
    margin-top: 0;
    color: #4b4b4b;
    font-weight: 300;
    line-height: 1.4em;
  }
  & a {
    color: #4b4b4b;
  }
  @media (min-width: 720px) {
    display: flex;
    font-size: 0.75rem;
  }
  @media (min-width: 840px) {
    font-size: 0.85rem;
  }
`;
const Col = styled.div`
  margin-bottom: 60px;
  flex: 1;
  padding-right: 20px;
  &.co {
    flex: 2;
  }
  &.newsletter {
    padding-right: 0;
  }
`;
const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
  & > li {
    text-transform: uppercase;
    font-size: .85rem;
    line-height: 2em;
    @media (min-width: 720px) {
      font-size: 0.75rem;
      line-height: 1.6em;
    }
    @media (min-width: 720px) {
      font-size: 0.85rem;
      line-height: 2em;
    }
  }
`;
const Copyright = styled.div`
  padding-top: 26px;
  background: #f2f2f2;
  min-height: 54px;
  & .container {
    @media (min-width: 720px) {
      display: flex;
    }
  }
  & p {
    flex: 1;
    text-align: left;
  }
`;
const SocialNav = styled.ul`
  list-style: none;
  padding-left: 0;
  & > li {
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 0 20px;
  }
  & > li:first-child {
    padding-left: 0;
  }
  @media (min-width: 720px) {
    flex: 1;
    margin-top: 0;
    text-align: right;
  }
`;

const Input = styled.input`
  font-size: 1rem;
  line-height: 64px;
  background: white;
  color: #8a8a8a;
  border: none;
  max-width: 60%;
  border-radius: 32px 0 0 32px;
  padding-left: 1rem;
  @media (min-width: 720px) {
    line-height: 32px;
    border-radius: 16px 0 0 16px;
  }
`;
const Button = styled.button`
  border: 0;
  font-size: 1rem;
  line-height: 64px;
  width: 64px;
  background: #4b4b4b;
  color: white;
  border: none;
  border-radius: 0 32px 32px 0;
  @media (min-width: 720px) {
    margin-top: -1px;
    line-height: 32px;
    width: 32px;
    border-radius: 0 16px 16px 0;
  }
`;

const Footer = () =>
  <FooterWrapper id="footer">
    <Container>
      <Col className="co">
        <Logo src="/static/slrmagic-logo-footer.png" alt="SLR Magic" />
        <p>Super interesting subline about SLR Magic</p>
      </Col>

      <Col className="nav">
        <Nav>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/distributors">
              <a>Distributors</a>
            </Link>
          </li>
          <li>
            <Link href="/link">
              <a>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <a>Contacts</a>
            </Link>
          </li>
        </Nav>
      </Col>

      <Col className="contacts">
        <p>
          <a href="#">+8 800 555 35 35</a>
        </p>
        <p>
          <a href="mailto:info@slrmagic.com">info@slrmagic.com</a>
        </p>
      </Col>

      <Col className="newsletter">
        <p>Subscribe to our Newsletter</p>
        <form action="">
          <Input type="text" placeholder="Email..." />
          <Button>
            <FontAwesome name="arrow-right" />
          </Button>
        </form>
      </Col>
    </Container>
    <Copyright>
      <Container>
        <p>© Copyright 2017 SLR Magic. All Rights Reserved</p>
        <SocialNav>
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
          <li>
            <a href="https://twitter.com">
              <FontAwesome name="twitter" />
            </a>
          </li>
        </SocialNav>
      </Container>
    </Copyright>
  </FooterWrapper>;

export default Footer;
