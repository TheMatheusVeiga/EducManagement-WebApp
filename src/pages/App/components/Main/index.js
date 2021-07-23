import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import Card from "../../content/Card";
import Container from "../../content/Container";
import Base from "../../content/Base";

import { getToolsAction } from "../../../../redux/ducks/Tools";

const Main = () => {

  //Extractor
  const dispatch = useDispatch();

  return (
    <>
        <Base>
          <Container>
            <button onClick={ () => dispatch(getToolsAction()) }> Get Tools</button>
          </Container>
        </Base>
      </>
  );
}
export default Main;
