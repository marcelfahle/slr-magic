import styled from "emotion/react";

const Category = styled.div`
  text-align: center;
  flex: 1;
  & .icon img {
    display: block;
    margin: 0 auto;
    max-height: 47px;
    margin-bottom: 30px;
  }
  & h4 {
    font-size: 1rem;
    letter-spacing: 9.6px;
    text-transform: uppercase;
    color: #a7a7a7;
    margin: 0;
    margin-bottom: 19px;
    font-weight: 400;
  }
  & h5 {
    margin: 0;
    font-family: Lora, serif;
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    color: #3e3e3e;
  }
`;

const CategoryIcon = ({ img, cat, val }) =>
  <Category>
    <div className="icon">
      <img src={`/static/${img}`} alt={cat} />
    </div>
    <h4>
      {cat}
    </h4>
    <h5>
      {val}
    </h5>
  </Category>;

export default CategoryIcon;
