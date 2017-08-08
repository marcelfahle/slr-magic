import styled from "emotion/react";

const Slider = styled.div`padding-top: 7rem;`;
const Title = styled.h2`
  font-weight: 600;
  //font-size: 3.75rem;
  font-size: 2.25rem;
  text-align: center;
`;

const DummyImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 80%;
  max-width: 774px;
`;

const HomeSlider = () =>
  <Slider>
    <Title>SLR Magic ANAMORPHOT-CINE 2x</Title>
    <DummyImg src="/static/slide-anamorphot2.png" alt="Anamorphot 2x" />
  </Slider>;

export default HomeSlider;
