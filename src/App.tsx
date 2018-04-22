import React from 'react';
import { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Page from "./pages"
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Page/>
      </Provider>
    );
  }
}