import Styled from "styled-components";
import img from "../../../assets/background.svg";

const Base = Styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
`;

export default Base;
