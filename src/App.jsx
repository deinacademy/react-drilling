import { useState } from 'react'

import Parent from "./components/drilling/Parent";

import Father from "./components/avoid/Father";

import './App.css'

function App() {
  const styles = {
    person: "person",
    first: "first-generation",
    second: "second-generation",
    third: "third-generation",
    fourth: "fourth-generation"
  };

  return (
    <div className="App">

      <div className="compare">
        <div className="compare-side">
          <h1>Property Drilling</h1>

          <Parent
            styles={styles}
            nameParent="Mauricio"
            lastName="Martinez"
          />
        </div>
        <div className="compare-side">
          <h1>Avoid Drilling</h1>
          
          <Father
            className="person first-generation"
            name="Mauricio"
            lastName="Martinez"
          />
        </div>
      </div>
    </div>
  )
}

export default App
