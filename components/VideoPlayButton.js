import FontAwesome from "react-fontawesome";
import styled from "emotion/react";

const Link = styled.a`
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: white;
  background: rgba(255, 0, 0, 0);
  cursor: pointer;
  & .fa {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 60px;
  }
`;

const VideoPlayButton = () =>
  <Link href="https://marcelfahle.net" target="_blank">
    <FontAwesome name="play-circle" />
  </Link>;

export default VideoPlayButton;
