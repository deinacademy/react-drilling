import { useState } from 'react'

import Parent from "./components/drilling/Parent";

import Father from "./components/avoid/Father";
import Son from "./components/avoid/Son";

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
            nameChild="Camilo"
            nameGrandChild="Jose"
            lastName="Martinez"
          />
        </div>
        <div className="compare-side">
        <h1>Avoid Drilling</h1>
          <Father className="person first-generation" name="Mauricio" lastName="Martinez">
            <Son className="person second-generation" name="Camilo" lastName="Martinez">
              <Son className="person third-generation" name="Jose" lastName="Martinez"/>
            </Son>
          </Father>
        </div>
      </div>
    </div>
  )
}

export default App
