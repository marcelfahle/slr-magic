import styled from "emotion/react";

const Slider = styled.div`
  padding-top: 1rem;
  padding-bottom: 3rem;
  position: relative;
  @media (min-width: 800px) {
    padding-top: 3.5rem;
  }
  @media (min-width: 960px) {
    padding-top: 7rem;
  }
`;
const Title = styled.h2`
  font-weight: 600;
  //font-size: 3.75rem;
  text-align: center;
  font-size: 1.8rem;
  padding-left: 2rem;
  padding-right: 2rem;
  @media (min-width: 800px) {
    font-size: 2.25rem;
  }
`;

const DummyImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 80%;
  max-width: 774px;
`;

const SubTitle = styled.h3`
  margin: 0;
  font-size: 0.8125rem;
  text-transform: uppercase;
  position: absolute;
  bottom 3rem;
  width: 100%;
  text-align: center;
  letter-spacing: 0.39rem;
  @media (min-width: 800px) {
    padding-left: 20px;
    text-align: left;
  }
`;

const HomeSlider = () =>
  <Slider>
    <Title>ANAMORPHOT-CINE 2x</Title>
    <DummyImg src="/static/slide-anamorphot2.png" alt="Anamorphot 2x" />
    <SubTitle>35mm, 50mm & 70mm</SubTitle>
  </Slider>;

export default HomeSlider;
