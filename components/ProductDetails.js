import styled from "emotion/react";
import BuyButton from "../components/BuyButton";

const Details = styled.div`
  flex: 1;
  @media (min-width: 640px) {
    padding-top: 2em;
    width: 42%;
  }
`;

const Features = styled.ul`
  font-family: Lora, serif;
  color: #3e3e3e;
  font-size: 1rem;
  line-height: 1.5em;
  margin: 0;
  padding: 0;
  list-style-position: inside;

  @media (min-width: 480px) {
    font-size: 1.3rem;
  }
  @media (min-width: 640px) {
    font-size: 1rem;
  }
  @media (min-width: 960px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const Price = styled.p`
  margin-top: 0.5em;
  margin-bottom: 0.5em;

  font-size: 2rem;
  font-family: Lora, serif;
  font-weight: bold;

  @media (min-width: 480px) {
    font-size: 2.5rem;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  @media (min-width: 640px) {
    font-size: 2rem;
  }
  @media (min-width: 960px) {
    font-size: 3rem;
  }
`;

const ProductDetails = ({ prod }) =>
  <Details>
    <Features>
      {prod.details.map((d, i) =>
        <li key={i}>
          {d}
        </li>
      )}
    </Features>

    <Price>
      ${prod.price}
    </Price>

    <BuyButton
      title={prod.title}
      image={`/static/${prod.images[0]}`}
      price={prod.price}
    />
  </Details>;

export default ProductDetails;
