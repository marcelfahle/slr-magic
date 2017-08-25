import Layout from "../components/layout";
import styled from "emotion/react";
import CategoryIcon from "../components/CategoryIcon";
import ImageViewer from "../components/ImageViewer";
import ProductDetails from "../components/ProductDetails";
import ProductListItem from "../components/ProductListItem";

import prodlist from "../static/prodlist.js";
import faq from "../static/faq1.json";

const ProductPage = styled.div`
  margin-top: 2.5rem;
  padding-left: 1em;
  padding-right: 1em;
  @media (min-width: 960px) {
    font-size: 5rem;
    padding: 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.3em;
  @media (min-width: 480px) {
    font-size: 2rem;
  }
  @media (min-width: 960px) {
    font-size: 50px;
  }
`;

const Categories = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 910px;
  margin-bottom: 0;
  @media (min-width: 640px) {
    max-width: 70%;
    margin-bottom: 20px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 90px;
  }
`;

const ProductWrapper = styled.div`
  display: block;

  @media (min-width: 480px) {
    padding-bottom: 40px;
  }
  @media (min-width: 640px) {
    display: flex;
  }
`;

const FAQWrapper = styled.div`
  padding: 40px 0;
  @media (min-width: 480px) {
    padding: 60px 0;
  }
  @media (min-width: 960px) {
    padding: 80px 0;
  }
`;
const RelatedProductsWrapper = styled.div`
  display: none;
  background: #f7f7f7;
  @media (min-width: 640px) {
    display: block;
    padding: 60px 0;
  }
  @media (min-width: 640px) {
    padding: 60px 0;
  }
  @media (min-width: 960px) {
    padding: 80px 0;
  }
`;
const RelatedProducts = styled.div`display: flex;`;

const SubHeadline = styled.h3`
  font-size: 1.25rem;
  text-align: center;
  @media (min-width: 480px) {
    font-size: 1.5rem;
  }
  @media (min-width: 640px) {
    font-size: 40px;
  }
`;

const DL = styled.dl`
  margin: 0 auto;
  @media (min-width: 640px) {
    width: 80%;
  }
`;
const DT = styled.dt`
  font-family: Lora, serif;
  color: #3e3e3e;
  font-size: 1rem;
  line-height: 1.2em;
  margin-bottom: 0.5em;
  font-weight: bold;
  @media (min-width: 480px) {
    font-size: 1.3rem;
    line-height: 1.2em;
  }
  @media (min-width: 640px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
const DD = styled.dd`
  margin-left: 0;
  font-family: Lora, serif;
  color: #3e3e3e;
  margin-bottom: 1.5em;
  font-size: 1rem;
  line-height: 1.2em;
  @media (min-width: 480px) {
    font-size: 1.3rem;
    line-height: 1.2em;
  }
  @media (min-width: 640px) {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 0.5em;
  }
`;

const prod = {
  title: "APO-Hyperprime CINE<br />25mm T2.1",
  images: [
    "prod-apohyperprime-25.png",
    "prod-apohyperprime-50.jpg",
    "prod-apohyperprime-85.jpg"
  ],
  details: [
    "Covers Full-Frame Sensors",
    "44mm Image Circle",
    "T2.1 to T22 Aperture Range",
    "Suitable for 6K Resolution Sensors",
    "Cine-Style Focus and Iris Gears",
    "300° Focus Rotation",
    "Internal Focus, Non-Rotating Front",
    "95mm Front Diameter",
    "PL-Mount"
  ],
  price: "2499.00",
  status: "available"
};

function createMarkup(txt) {
  return { __html: txt };
}

const Product = () =>
  <Layout>
    <ProductPage>
      <Title dangerouslySetInnerHTML={createMarkup(prod.title)} />

      <Categories>
        <CategoryIcon img="icon-focal.png" cat="Focal Length" val="25mm" />
        <CategoryIcon img="icon-category.png" cat="Category" val="Cine" />
        <CategoryIcon img="icon-mount.png" cat="Mount" val="PL, E" />
      </Categories>

      <ProductWrapper>
        <ImageViewer images={prod.images} title={prod.title} />

        <ProductDetails prod={prod} />
      </ProductWrapper>

      <FAQWrapper>
        <SubHeadline>Frequently Asked Questions</SubHeadline>
        {faq.map((e, i) =>
          <DL key={i}>
            <DT>
              {e.q}
            </DT>
            <DD>
              {e.a}
            </DD>
          </DL>
        )}
      </FAQWrapper>

      <RelatedProductsWrapper>
        <SubHeadline>Related Products</SubHeadline>

        <RelatedProducts>
          {prodlist
            .splice(0, 3)
            .map((p, i) => <ProductListItem key={i} {...p} />)}
        </RelatedProducts>
      </RelatedProductsWrapper>
    </ProductPage>
  </Layout>;

export default Product;
