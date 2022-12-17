## **12 - Trineos Eléctricos, ¡guau!** [</12>](12-trineosElectricos.js)
---
Papa Noél tiene nuevos trineos eléctricos pero debe controlar el consumo eléctrico ya que <span style="color:#ffff00">sólo tiene una batería de 20W.</span>

Nos dan un <span style="color:#ffff00">array de trineos, de peor a mejor</span>, con sus respectivos consumos. Cada trineo es un objeto con dos propiedades: `name` y `consumption`.

El campo `consumption` es un número que representa la cantidad de vatios (W) que <span style="color:#ffff00">consume</span> el trineo para cada <span style="color:#ffff00">unidad de distancia.</span> El campo `name` es una cadena de texto que representa el nombre del trineo.

Crea un programa que nos devuelva el nombre del mejor trineo disponible que nos permita cubrir la distancia.

```
const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

selectSleigh(distance, sleighs) // => "Dancer"

// Dasher consume 9W para recorrer 30 de distancia
// Dancer consume 15W para recorrer 30 de distancia
// Rudolph consume 21W para recorrer 30 de distancia
// Midu consume 30W para recorrer 30 de distancia

// El mejor trineo con el que puede recorrer
// la distancia es Dancer.

// Dasher recorre la distancia pero es peor trineo
// Rudolph y Midu no pueden recorrer la distancia con 20W.
```

Recuerda que:
  - <span style="color:#ffff77">La batería siempre es de 20W.</span>
  - <span style="color:#ffff77">La lista de trineos está ordenada de peor a mejor trineo.</span>
  - <span style="color:#ffff77">Tienes que devolver el nombre del mejor trineo que nos permita cubrir la distancia con los vatios que tenemos disponibles.</span>
  - <span style="color:#ffff77">Si ningún trineo es usable para la distancia, devuelve `null`.</span>
---
➡️[Página principal](../../README.md)