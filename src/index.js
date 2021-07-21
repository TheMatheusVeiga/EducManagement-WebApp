import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/theme";
import { Provider } from "react-redux";
import store from "./redux/store"

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  </Provider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
