import React, { Component } from "react";
import styled from "emotion/react";

const Images = styled.div`
  flex: 1;
  width: 42%;
  margin-right: 8%;
  & img {
    max-width: 100%;
  }
`;

const Thumbnails = styled.div`
  &  img {
    width: 70px;
    margin-right: 10px;
    cursor: pointer;
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

  selectImage(e, newImage) {
    e.preventDefault();
    this.setState({ currentImage: newImage });
  }

  render() {
    const { images, title } = this.props;
    return (
      <Images>
        <img src={`/static/${images[this.state.currentImage]}`} alt="img" />
        <Thumbnails>
          {images.map((img, i) =>
            <a href="#" onClick={e => this.selectImage(e, i)}>
              <img src={`static/${img}`} alt={`${title} - Figure ${i + 1}`} />
            </a>
          )}
        </Thumbnails>
      </Images>
    );
  }
}

export default ImageViewer;
