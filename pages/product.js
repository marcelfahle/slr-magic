import Layout from "../components/layout";
import styled from "emotion/react";
import CategoryIcon from "../components/CategoryIcon";
import ImageViewer from "../components/ImageViewer";
import ProductDetails from "../components/ProductDetails";
import ProductListItem from "../components/ProductListItem";

import prodlist from "../static/prodlist.js";

const Title = styled.h1`text-align: center;`;

const Categories = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 910px;
`;

const ProductWrapper = styled.div`display: flex;`;

const FAQWrapper = styled.div`margin: 40px 0;`;
const RelatedProductsWrapper = styled.div`
  margin: 40px 0;
  display: flex;
`;

const prod = {
  title: "APO-Hyperprime CINE<br />25mm T2.1",
  images: [
    "prod-apohyperprime-25.png",
    "prod-apohyperprime-50.jpg",
    "prod-apohyperprime-85.jpg"
  ],
  details: ["Feature 12", "Feature 2", "Feature 3", "Feature 4"],
  price: "$2499.00",
  status: "available"
};

const Product = () =>
  <Layout>
    <div>
      <Title>
        {prod.title}
      </Title>

      <Categories>
        <CategoryIcon img="cat-dummy1.png" cat="Focal Length" val="25mm" />
        <CategoryIcon img="cat-dummy2.png" cat="Category" val="Cine" />
        <CategoryIcon img="cat-dummy3.png" cat="Mount" val="PL, E" />
      </Categories>

      <ProductWrapper>
        <ImageViewer images={prod.images} title={prod.title} />

        <ProductDetails prod={prod} />
      </ProductWrapper>

      <FAQWrapper>
        <h3>Frequently Asked Questions</h3>
      </FAQWrapper>

      <RelatedProductsWrapper>
        <h3>Related Products</h3>

        {prodlist.map(p => <ProductListItem {...p} />)}
      </RelatedProductsWrapper>
    </div>
  </Layout>;

export default Product;
