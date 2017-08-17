import Link from "next/link";
import styled from "emotion/react";

const ProductCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin: 0px 0 58px 0;
  flex: 100%;

  background-color: #fff;

  text-decoration: none;

  @media (min-width: 550px) {
    margin: 2.5%;
    flex: 45%;
    flex-grow: 0;
  }
  @media (min-width: 960px) {
    margin: 2.5%;
    flex: 28%;
    flex-grow: 0;
  }
`;
const ProductImage = styled.div`
  width: 100%;
  & img {
    max-width: 100%;
  }
`;
const ProductInfo = styled.div`padding: 24px 10% 15px 10%;`;
const Name = styled.h3`
  color: #3e3e3e;
  font-size: 1.125rem;
  padding-bottom: 27px;
  border-bottom: 1px solid #e9e9e9;
`;
const Category = styled.h4`
  text-transform: uppercase;
  color: #9a9a9a;
  font-size: 0.75rem;
`;
const Price = styled.h5`
  color: #c1c1c1;
  font-size: .75rem;
  font-weight: 400;
  leter-spacing: 2.4px;
  margin-bottom: 0;
`;

function createMarkup(html) {
  return { __html: html };
}

const ProductListItem = ({ name, cat, price, img }) =>
  <Link>
    <ProductCard href="/product">
      <ProductImage>
        <img src={`/static/${img}`} />
      </ProductImage>
      <ProductInfo>
        <Category>
          {cat}
        </Category>
        <Name dangerouslySetInnerHTML={createMarkup(name)} />
        <Price>
          ${price}
        </Price>
      </ProductInfo>
    </ProductCard>
  </Link>;

export default ProductListItem;
