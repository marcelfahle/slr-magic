import React, { Component } from "react";
import Head from "next/head";
import { injectGlobal } from "emotion";
import styled from "emotion/react";
import "glamor/reset";
import HomeLink from "./HomeLink";
import MainNav from "./MainNav";
import Footer from "./Footer";
import "./globalStyles";

const SiteWrapper = styled.div``;
const Main = styled.main`
  &.open {
    margin-top: ${props => (props.theme === "transparent" ? "0px" : 0)};
    @media (min-width: 800px) {
      margin-top: ${props => (props.theme === "transparent" ? "-106px" : 0)};
    }
  }
  &.closed {
    margin-top: ${props => (props.theme === "transparent" ? "-114px" : 0)};
    @media (min-width: 800px) {
      margin-top: ${props => (props.theme === "transparent" ? "-106px" : 0)};
    }
  }
`;
const Header = styled.header`z-index: 10;`;

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenu: false
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({ mobileMenu: !this.state.mobileMenu });
  }

  render() {
    const { children, title = "SLR Magic", theme = "light" } = this.props;
    return (
      <div>
        <Head>
          <title>
            {title}
          </title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lora"
            rel="stylesheet"
          />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Head>
        <Header id="header">
          <HomeLink mobileMenu={this.state.mobileMenu} theme={theme} />
          <MainNav
            className={this.state.mobileMenu ? "open" : "closed"}
            theme={theme}
            mobileMenu={this.state.mobileMenu}
            toggleMobileMenu={this.toggleMobileMenu}
          />
        </Header>

        <Main
          className={this.state.mobileMenu ? "open" : "closed"}
          id="main"
          theme={theme}
          mobileMenu={this.state.mobileMenu}
        >
          {children}
        </Main>

        <Footer theme={theme} />
      </div>
    );
  }
}

export default Layout;
