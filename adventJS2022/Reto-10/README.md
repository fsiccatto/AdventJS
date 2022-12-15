## **10 - El salto del trineo de Papá Noel** [</10>](10-saltoTrineo.js)
---
Crea un programa que compruebe que el trineo de Santa Claus hace una <span style="color:#ffff00">parabola al saltar entre ciudades.</span> Recibes un <span style="color:#ffff00">array de números</span> que representan la <span style="color:#ffff00">altura</span> en la que se encuentra el trineo en cada momento.

Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. <span style="color:#ffff00">No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando.</span> Veamos unos ejemplos:


```
const heights = [1, 3, 8, 5, 2]
checkJump(heights) // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights = [1, 7, 3, 5]
checkJump(heights) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
```

Necesitamos que el programa devuelva un `boolean` que indique si el trineo hace una parabola o no.

A tener en cuenta:
  - <span style="color:#ffff77">Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura entre dos posiciones, la parabola continua.</span>
  - <span style="color:#ffff77">No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas).</span>
---
➡️[Página principal](../../README.md)