## **13 - Backup de los archivos de Papá Noel** [</13>](13-backup.js)
---
Para evitar perder datos cuando el servidor se cae, Papa Noel ha decidido hacer backups incrementales. Un hacker llamado S4vitelf le esta ayudando.

Por un lado, tenemos el <span style="color:#ffff00">timestamp</span> de cuándo se hizo el último backup.

También tenemos los cambios que se han realizado en un array de arrays. Cada array interno contiene  <span style="color:#ffff00">dos elementos:</span> el <span style="color:#ffff00">id</span> del archivo modificado y el  <span style="color:#ffff00">timestamp </span>de la modificación.

Tienes que crear un programa que devuelva un array con las <span style="color:#ffff00">id</span> de los archivos que tendríamos que hacer backup porque han sido modificados desde el último backup y <span style="color:#ffff00">ordenados de forma ascendente.</span> Ejemplo:

```
const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
// El archivo con id 1 ha sido modificado dos veces
// después del último backup.

// El archivo con id 2 no ha sido modificado después
// del último backup.

// El archivo con id 3 ha sido modificado una vez
// después del último backup.

// Tenemos que hacer una copia de seguridad
// de los archivos 1 y 3.
```

Recuerda que:
  - <span style="color:#ffff77">Devuelve la id de los archivos que han sido modificados después del último backup.</span>
  - <span style="color:#ffff77">Devuelve un array vacío si no hay archivos que hacer backup.</span>
  - <span style="color:#ffff77">Recuerda que deben estar ordenados los id de forma ascendente.</span>
---
➡️[Página principal](../../README.md)