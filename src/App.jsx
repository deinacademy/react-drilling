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
      {/* 
      Ventajas:
      
      * SOLID: 
        https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898
      * Menos cantidad de propiedades sobre todo en componentes de nivel superior
      * Separacion de conceptos, el papa no tiene que conocer cosas de su hijo si no las va a usar
      * Facilidad de depuracion
      * Facilidad de depuracion sin navegar entre proyectos buscando el componente hijo
      * Disminucion del tamaño de paquetes (porque el hijo no esta en el padre)
      * Disminución del mantenimiento de webpack y peerDependencies (porque el hijo no esta en el padre)
      * Padre no necesita ser re-compilado por correccion de hijo
      * Se pueden comentar papa o hijo para hacer debug
      
      * Desventajas:
      
      * Compartir Propiedades entre padre a hijo requiere codigo extra con React.Children.map
      * Mayor cantidad de imports
      * */}
    </div>
  )
}

export default App
