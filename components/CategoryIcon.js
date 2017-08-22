import styled from "emotion/react";

const Category = styled.div`
  text-align: center;
  flex: 1;
  & h4 {
  }
  & h5 {
  }
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  max-height: 2rem;
  margin-bottom: .6rem;
  @media (min-width: 960px) {
    max-height: 3rem;
    margin-bottom: 2rem;
  }
`;

const H4 = styled.h4`
  font-size: 0.5rem;
  height: 2em;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #a7a7a7;
  margin: 0;
  margin-bottom: 1.2em;
  font-weight: 400;
  @media (min-width: 380px) {
    height: auto;
  }
  @media (min-width: 960px) {
    font-size: 1rem;
  }
`;

const H5 = styled.h5`
  margin: 0;
  font-family: Lora, serif;
  font-size: 0.75rem;
  line-height: 2em;
  font-weight: bold;
  color: #3e3e3e;
  @media (min-width: 960px) {
    font-size: 1.1rem;
  }
`;

const CategoryIcon = ({ img, cat, val }) =>
  <Category>
    <div className="icon">
      <Img src={`/static/${img}`} alt={cat} />
    </div>
    <H4>
      {cat}
    </H4>
    <H5>
      {val}
    </H5>
  </Category>;

export default CategoryIcon;
