import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { useDispatch } from 'react-redux';
import './style.css';
import Container from '../../content/Container';
import Base from '../../content/Base';

import { getToolsAction } from '../../../../redux/ducks/Tools';

const Main = () => {
  // Extractor
  const dispatch = useDispatch();

  return (
    <>
      <Base>
        <Container>
          <button type="button" onClick={() => dispatch(getToolsAction())}> Get Tools</button>
        </Container>
      </Base>
    </>
  );
};
export default Main;
