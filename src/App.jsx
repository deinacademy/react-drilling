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
          
          <Father className="person root-generation" name="Rafael" lastName="Martinez">
            <Father className="person first-generation" name="Mauricio" lastName="Martinez">
              <Son className="person second-generation" name="Camilo">
                <Son className="person third-generation" name="Jose">
                  <Son className="person fourth-generation" name="Sandra">
                    <div>I don't want 👶</div>
                  </Son>
                  <Son className="person second-generation" name="Camilo"/>
                </Son>
                <Son className="person third-generation" name="Alejandro" />
                <Son className="person third-generation" name="Lucia" />
                <Son className="person third-generation" name="Julian" />
              </Son>
              <Son className="person second-generation" name="Alejandra"/>
            </Father>
          </Father>
        </div>
      </div>
    </div>
  )
}

export default App
