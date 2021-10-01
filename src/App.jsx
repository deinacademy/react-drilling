import { useState } from 'react'

import Parent from "./components/drilling/Parent";

import Father from "./components/avoid/Father";
import Son from "./components/avoid/Son";

import './App.css'

function App() {
  const ux = {
    person: "person",
    first: "first-generation",
    second: "second-generation",
    third: "third-generation",
    fourth: "fourth-generation"
  };

  return (
    <div className="App">

      <hr />

      <h1>Property Drilling</h1>

      <Parent
        ux={ux}
        nameParent="Mauricio"
        nameChild="Camilo"
        nameGrandChild="Jose"
        lastName="Martinez"
      />

      <hr />

      <h1>Avoid Drilling</h1>

      {/* <Father ux="person root-generation" name="Rafael" lastName="Martinez"> */}
        <Father ux="person first-generation" name="Mauricio" lastName="Martinez">
          <Son ux="person second-generation" name="Camilo">
            <Son ux={`${ux.person} ${ux.third}`} name="Jose">
              {/* <Son ux={`${ux.person} ${ux.fourth}`} name="Sandra">
                <div>I don't want 👶</div>
              </Son> */}
              {/* <Son ux="person second-generation" name="Camilo"/> */}
            </Son>
            {/* <Son ux={`${ux.person} ${ux.third}`} name="Alejandro" />
            <Son ux={`${ux.person} ${ux.third}`} name="Lucia" />
            <Son ux={`${ux.person} ${ux.third}`} name="Julian" /> */}
            </Son>
            {/* <Son ux="person second-generation" name="Alejandra"/> */}
        </Father>
      {/* </Father> */}
      
      <hr />
    </div>
  )
}

export default App
