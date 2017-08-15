import styled from "emotion/react";
import Article from "./Article";

const News = styled.div``;

const NewsWrapper = styled.div`
  display: block;
  //height: ${props => (props.height ? props.height * 210 : 210)}px;
  @media (min-width: 420px) {
    display: flex;
    flex: ${props => (props.size ? props.size : 1)};
    //height: ${props => (props.height ? props.height * 300 : 300)}px;
    flex-direction: ${props => (props.type ? props.type : "row")};
  }
`;

const NewsGrid = () =>
  <News>
    <NewsWrapper>
      <Article type="video" textColor="white" bg="url('/static/news-1.jpg')">
        <h2>SLR Magic 8mm F4</h2>
      </Article>
      <Article type="video" textColor="white" bg="url('/static/news-2.jpg')">
        <h2>SLR Magic 8mm F4</h2>
      </Article>
    </NewsWrapper>

    <NewsWrapper>
      <Article type="product-vert" bg="url('/static/prod-vert1.png')">
        <h3>HyperPrime CINE 10mm T2.1</h3>
      </Article>

      <NewsWrapper type="column">
        <NewsWrapper>
          <Article type="product" bg="url('/static/teaser-catalogue.png')">
            <h3>Product Catalog</h3>
          </Article>
          <Article type="product" bg="url('/static/prod2.png')">
            <h3>Anamorphot-50 1.33x</h3>
          </Article>
        </NewsWrapper>
        <Article
          type="content-feature"
          bg="url('/static/customer-gallery.jpg')"
          textColor="white"
          textAlign="right"
        >
          <h2>Shot on SLR Magic.</h2>
          <p>
            Experience the beauty of SLR Magic <br />in our Customer Gallery{" "}
          </p>
          <p>
            <a href="#">Customer Gallery</a>
          </p>
        </Article>
      </NewsWrapper>
    </NewsWrapper>
  </News>;

export default NewsGrid;
