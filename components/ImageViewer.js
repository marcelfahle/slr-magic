import React, { Component } from "react";
import styled from "emotion/react";

const Images = styled.div`
  & img {
    max-width: 100%;
  }
  @media (min-width: 640px) {
    margin-right: 8%;
    width: 42%;
  }
`;

const Single = styled.div`
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

const FullSizeScrollWrapper = styled.div`overflow-x: scroll;`;
const FullSize = styled.div`
  display: block;

  @media (min-width: 640px) {
    display: none;
  }
  & img {
    width: 90vw;
    display: inline;
  }
`;

const Thumbnails = styled.div`
  display: none;
  & a {
    display: inline-block;
    padding: 2px;
    margin-right: 4px;
    border: 1px solid #eee;
  }
  @media (min-width: 640px) {
    display: block;
  }
`;
const Thumb = styled.img`
  width: 40px;
  margin-right: 10px;
  cursor: pointer;
  @meda (min-width: 960px) {
    width: 70px;
  }
`;

class ImageViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0
    };

    this.selectImage = this.selectImage.bind(this);
  }

  componentDidMount() {}

  selectImage(e, newImage) {
    e.preventDefault();
    this.setState({ currentImage: newImage });
  }

  render() {
    const { images, title } = this.props;
    return (
      <Images>
        <FullSizeScrollWrapper>
          <FullSize style={{ width: `${images.length * 90}vw` }}>
            {images.map((img, idx) =>
              <img
                key={idx}
                src={`/static/${img}`}
                alt={`${title} ${idx + 1}`}
              />
            )}
          </FullSize>
        </FullSizeScrollWrapper>
        <Single>
          <img src={`/static/${images[this.state.currentImage]}`} alt="img" />
        </Single>

        <Thumbnails>
          {images.map((img, i) =>
            <a
              key={i}
              href="#"
              onMouseOver={e => this.selectImage(e, i)}
              onClick={e => this.selectImage(e, i)}
            >
              <Thumb src={`static/${img}`} alt={`${title} - Figure ${i + 1}`} />
            </a>
          )}
        </Thumbnails>
      </Images>
    );
  }
}

export default ImageViewer;
