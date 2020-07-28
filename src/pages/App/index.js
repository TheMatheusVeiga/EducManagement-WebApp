import React, { Component } from "react";
import "./style/index.css";
import Card from "./content/Card";
import Container from "./content/Container";
import Base from "./content/Base";

class App extends Component {
  render() {
    return (
      <>
        <Base>
          <Container>
            <Card>
              <img
                class="card-image"
                src="https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </Card>

            <Card>
              <h3>Pagina Landind !</h3>
            </Card>

            <Card>
              <h3>Pagina Landind !</h3>
            </Card>
          </Container>
        </Base>
      </>
    );
  }
}
export default App;
