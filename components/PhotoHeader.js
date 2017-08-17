import styled from "emotion/react";

const Wrapper = styled.div`position: relative;`;
const Img = styled.img`
  min-width: 640px;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;
const Text = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 35%;
`;
const H1 = styled.h1`
  width: 100%;
  color: white;
  font-size: 1.6rem;
  @media (min-width: 550px) {
    font-size: 2.2rem;
  }
  @media (min-width: 800px) {
    font-size: 2.8rem;
  }
  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`;
const P = styled.p`
  color: white;
  font-size: 1rem;
  @media (min-width: 550px) {
    font-size: 1.2rem;
  }
  @media (min-width: 800px) {
    font-size: 1.6rem;
  }
  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

const PhotoHeader = ({ src, l1, l2 }) =>
  <Wrapper>
    <Img src={src} />
    <Text>
      <H1>
        {l1}
      </H1>
      <P>
        {l2}
      </P>
    </Text>
  </Wrapper>;

export default PhotoHeader;
