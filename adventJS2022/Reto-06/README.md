## **06 - Creando adornos navideños** [</06>](06-creandoAdornos.js)
---
Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

Para <span style="color:#ffff00">crear los cubos</span> se le pasa un <span style="color:#ffff00">número con el tamaño deseado</span> al programa y este devuelve un `string` con el <span style="color:#ffff00">diseño de ese tamaño.</span> Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

```
const cube = createCube(3)
```

```
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
```

Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: `/`, `\`, `_` y (espacio en blanco).

Otros ejemplos de cubos:

```
const cubeOfOne = createCube(1)
```

```
/\_\
\/_/
```

```
const cubeOfTwo = createCube(2)
```

```
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
```

Cosas a tener en cuenta:
  - <span style="color:#ffff77">Fíjate bien en los espacios en blanco que hay en el cubo.</span>
  - <span style="color:#ffff77">El cubo tiene que ser simétrico.</span>
  - <span style="color:#ffff77">Asegúrate de usar los símbolos correctos.</span>
  - <span style="color:#ffff77">Cada nueva línea del cubo debe terminar con un salto de línea (`\n`) excepto la última.</span>
---
➡️[Página principal](../../README.md)