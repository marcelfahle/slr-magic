import styled from "emotion/react";
import Layout from "../components/layout";
import PhotoHeader from "../components/PhotoHeader";
import ProductListItem from "../components/ProductListItem";
import prodlist from "../static/prodlist.js";

const ProductList = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-wrap: wrap;
`;
const PageWrapper = styled.div`
  background: #f7f7f7;
  padding: 90px 30px 50px 30px;
  border-bottom: 1px solid #e9e9e9;
`;
const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 30px;
  text-align: right;

  & select {
    border: 1px solid #9a9a9a;
  }
`;

const Products = () =>
  <Layout theme="transparent">
    <PhotoHeader
      src="/static/header-products.png"
      l1="Experience NOKTOR"
      l2="You totally have to see it, to believe it!"
    />
    <PageWrapper>
      <Filter>
        <select id="" name="">
          <option value="">Sort</option>
          <option value="">Release Date</option>
          <option value="">Price</option>
          <option value="">Name</option>
        </select>
      </Filter>
      <ProductList>
        {prodlist.map(p => <ProductListItem {...p} />)}
      </ProductList>
    </PageWrapper>
  </Layout>;

export default Products;
