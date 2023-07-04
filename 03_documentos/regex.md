| patron           | reemplazo                                   | descripcion                 | ejemplo |
|------------------|---------------------------------------------|-----------------------------|---------|
| ^(.*)(\r?\n\1)+$ | $1                                          | eliminar palabras repetidas |         |
| ^\d              | seleccionar palabra que comiencen en numero | 4 concat().                 |         |