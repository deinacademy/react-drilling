# React Property Drilling

Evitar el property drilling (pasar propiedades excesivamente entre componentes) usado `React.Children`.

## Ventajas

* [SOLID](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)
* Menos cantidad de propiedades sobre todo en componentes de nivel superior
* Separacion de conceptos, el papa no tiene que conocer cosas de su hijo si no las va a usar
* Facilidad de depuracion
* Facilidad de depuracion sin navegar entre proyectos buscando el componente hijo
* Disminucion del tamaño de paquetes (porque el hijo no esta en el padre)
* Disminución del mantenimiento de webpack y peerDependencies (porque el hijo no esta en el padre)
* Padre no necesita ser re-compilado por correccion de hijo
* Se pueden comentar papa o hijo para hacer debug
* Re-usabilidad del componente

## Desventajas

* Compartir Propiedades entre padre a hijo requiere codigo extra con React.Children.map
* Mayor cantidad de imports
