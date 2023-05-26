import React, { Component } from "react";

import "./App.css";
import List from "./components/List/List";
import Backdrop from "./components/Backdrop/Backdrop";
import Modal from "./components/Modal/Modal";
import { Transition } from "react-transition-group";

class App extends Component {
  state = { modalIsOpen: false, showBlock: false };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({
              showBlock: !prevState.showBlock,
            }))
          }
        >
          Toggle
        </button>{" "}
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exited" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.modalIsOpen}
          timeout={300}
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition>
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
