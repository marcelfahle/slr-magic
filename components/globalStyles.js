import { injectGlobal } from "emotion";

injectGlobal`
  body {
    font-family: 'Montserrat', serif;
    color: 
  }
  h1, h2, h3, h4, h5 {
    font-weight: 600;
    color: #3d3d3d;
  }
  p {
    color: #4b4b4b;
  }
  #header, #main, #footer {
    max-width: 1280px;
    overflow-x: hidden;
    min-width: 320px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
`;
