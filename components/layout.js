import Head from "next/head";
import { injectGlobal } from "emotion";
import styled from "emotion/react";
import "glamor/reset";
import HomeLink from "./HomeLink";
import MainNav from "./MainNav";
import Footer from "./Footer";
import "./globalStyles";

const Layout = ({ children, title = "SLR Magic" }) =>
  <div>
    <Head>
      <title>
        {title}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700"
        rel="stylesheet"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
    </Head>
    <header>
      <HomeLink />
      <MainNav />
    </header>

    {children}

    <Footer />
  </div>;

export default Layout;
