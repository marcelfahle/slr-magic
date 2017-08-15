import styled from "emotion/react";
import VideoPlayButton from "./VideoPlayButton";

const ArticleWrapper = styled.article`
  position: relative;
  height: 260px;
  &.product-vert {
    height: 480px;
  }
  background: ${props => props.bg};
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  color: ${props => (props.textColor ? props.textColor : "black")};
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  & h2 {
    font-weight: 600;
    margin-top: .2em;
    font-size: 1.58rem;
    padding: 1em 1em 0.4em 1em;
  }
  & h3 {
    font-size: 1rem;
    padding: 1em 1em 0 1em;
  }
  & p {
    font-size: 1.05rem;
    padding: 0 1em;
  }
  & a {
    color: inherit;
  }
  @media (min-width: 420px) {
    flex: 1;
    height: 150px;
    &.product-vert {
      height: 300px;
    }
    & h2 {
      font-size: 1.1rem;
    }
    & h3 {
      font-size: .75rem;
      padding-top: 0em;
    }
    & p {
      font-size: .75rem;
    }
  }
  @media (min-width: 540px) {
    height: 186px;
    &.product-vert {
      height: calc(340px + 2em);
    }
    & h2 {
      font-size: 1.1rem;
    }
    & h3 {
      font-size: .75rem;
    }
    & p {
      font-size: .75rem;
    }
  }
  @media (min-width: 720px) {
    height: 200px;
    &.product-vert {
      height: calc(370px + 2em);
    }
  }
  @media (min-width: 840px) {
    height: 240px;
    & h2 {
      font-size: 1.4rem;
    }
    & h3 {
      font-size: 1rem;
    }
    & p {
      font-size: .9rem;
    }
    &.product-vert {
      height: calc(448px + 2em);
    }
  }
  @media (min-width: 1020px) {
    height: 280px;
    & h2 {
      font-size: 1.4rem;
    }
    & h3 {
      font-size: 1rem;
    }
    & p {
      font-size: .9rem;
    }
    &.product-vert {
      height: calc(530px + 2em);
    }
  }
  @media (min-width: 1200px) {
    height: 320px;
    & h2 {
      font-size: 2.25rem;
    }
    & h3 {
      font-size: 1.25rem;
    }
    & p {
      font-size: 1.5rem;
    }
    &.product-vert {
      height: calc(608px + 2em);
    }
  }
`;

const Article = ({ bg, height, type, textColor, textAlign, children }) =>
  <ArticleWrapper
    bg={bg}
    height={height}
    textColor={textColor}
    textAlign={textAlign}
    className={type}
  >
    {children}
    {type === "video" ? <VideoPlayButton>Play</VideoPlayButton> : null}
  </ArticleWrapper>;

export default Article;
