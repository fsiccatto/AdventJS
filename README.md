# AdventJS

## 25 retos en JS. Hay retos para todos: fáciles, moderados, difíciles y muy difíciles también!
> Creador: Midudev 
  > [@midudev](https://twitter.com/midudev) 
  > en [AdventsJsChallenges](https://adventjs.dev/)
---
- ##### 01 Contando ovejas para dormir
- ##### 02 ¡Ayuda al elfo a listar los regalos!
- ##### 03 El Grinch quiere fastidiar la Navidad
- ##### 04 ¡Es hora de poner la navidad en casa!
- ##### 05 Contando los días para los regalos
- ##### 06 Rematando los exámenes finales
- ##### 07 Buscando en el almacén...
- ##### 08 La locura de las criptomonedas

---
## 01 - Contando ovejas para dormir [<01/>](01-contandoOvejas.js)
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
Por Ejemplo:
```
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
];
```

---
## 02 - ¡Ayuda al elfo a listar los regalos [<02/>](02-listarRegalos.js)
Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
```
const carta = 'bici coche balon _playstation bici coche peluche';
```

---
## 03 - El Grinch quiere fastidiar la Navidad [<03/>](03-grinch.js)
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis... 

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch.
```
const regalo = isValid("bici coche (balon) bici coche peluche"); // true
const regalo2 = isValid("(peluche {) bici"); // false
```

---
## 04 - ¡Es hora de poner la navidad en casa [<04/>](04-navidad.js)
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Por ejemplo, argumento de 5:
```
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

---
## 05 - Contando los días para los regalos [<05/>](05-contandoDias.js)
Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.
---
## 06 - Rematando los exámenes finales [<06/>](06-rematandoExamenes.js)
A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve null.

---
## 07 - Buscando en el almacén [<07/>](07-buscandoAlmacen.js)
Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:
```
const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
};

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
};
```

---
## 08 - ¡Es hora de poner la navidad en casa [<08/>](08-navidad.js)
Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

Ejemplos:
```
const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc) //-> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth) //-> 60 (compra a 10, vende a 70)
```
Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura:
```
const pricesDoge = [18, 15, 12, 11, 9, 7];
maxProfit(pricesDoge) =  //-> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
maxProfit(pricesAda) =  //-> -1 (no hay ganancia posible)
```

---
## 09 - ¡Es hora de poner la navidad en casa [<09/>](09-navidad.js)

---
###### *Franco Siccatto* [@FSikkario](https://twitter.com/FSikkario)
---
