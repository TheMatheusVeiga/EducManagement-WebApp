import Styled from 'styled-components';
import img from '../../../assets/gradient.svg';

const Base = Styled.div`
  width: 100vw;
  height: 100vh;
  // background-image: url(${img});

  background-color: #212121;
  background-size: cover;
  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export default Base;
