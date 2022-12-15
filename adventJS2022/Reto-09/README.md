## **09 - Las locas luces de Navidad** [</09>](09-lucesNavidad.js)
---
Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.

Tienen unas tiras led que son como un `Array`. Cada posición es un led y puede ser estar encendido (`1`) o apagado (`0`).

<span style="color:#ffff00">Cada 7 segundos</span>, los leds cambian de estado de esta forma:

- <span style="color:#ffff00">**Si el led está apagado**, se enciende si el led de su izquierda (`index - 1`) estaba encendido antes.</span>
- <span style="color:#ffff00">**Si el led está encendido**, se mantiene siempre encendido.</span>

Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos.<span style="color:#ffff00"> Los segundos se expresan en un número entero.</span> Por ejemplo:

Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:

```
const leds = [0, 1, 1, 0, 1]
countTime(leds) // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
```

A tener en cuenta:
  - <span style="color:#ffff77">El array siempre tendrá al menos un led encendido.</span>
  - <span style="color:#ffff77">El array puede tener cualquier longitud.</span>
  - <span style="color:#ffff77">Si todos los leds están encendidos, el tiempo es 0.</span>
---
➡️[Página principal](../../README.md)