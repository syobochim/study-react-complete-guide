import React, { Component } from "react";

import "./App.css";
import List from "./components/List/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {/*<Modal />*/}
        {/*<Backdrop />*/}
        <button className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
