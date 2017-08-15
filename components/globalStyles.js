import { injectGlobal } from "emotion";

injectGlobal`
  body {
    font-family: 'Montserrat', sans-serif;

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
