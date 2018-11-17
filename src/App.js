import React, { Component } from 'react';

import './App.css';
import RefHook from "./hooks/RefHook";
import CustomHook from "./hooks/CustomHook";
import CustomEffectHook from "./hooks/CustomEffectHook";

class App extends Component {
  render() {
    return (
      <main>
        <h3>Ref hook</h3>
        <RefHook />

        <h3>Custom</h3>
        <CustomHook />

        <h3>Custom Effect</h3>
        <CustomEffectHook />
      </main>
    );
  }
}

export default App;
