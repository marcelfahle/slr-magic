import styled from "emotion/react";

const Details = styled.div`
  flex: 1;
  width: 42%;
  padding-top: 2em;
`;

const Features = styled.ul`
  font-family: Lora, serif;
  color: #3e3e3e;
  font-size: 24px;
  margin: 0;
  padding: 0;
`;

const Price = styled.p`
  font-size: 36px;
  font-family: Lora, serif;
  font-weight: bold;
`;

const ProductDetails = ({ prod }) =>
  <Details>
    <Features>
      {prod.details.map(d =>
        <li>
          {d}
        </li>
      )}
    </Features>

    <Price>
      {prod.price}
    </Price>

    <a class="buy" href="/">
      Buy Now
    </a>
  </Details>;

export default ProductDetails;
