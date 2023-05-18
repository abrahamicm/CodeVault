### Better comments
 | Prefijo   | Descripción                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| BUG       | Indicar problemas conocidos en el código.                                                    |
| DEBUG     | Seguimiento de problemas específicos mientras se depura el código.                           |
| EXAMPLE   | Proporcionar ejemplos de uso de funciones o métodos específicos.                              |
| FEATURE   | Indicar nuevas características o funcionalidades agregadas al código.                        |
| FIXED     | Indicar problemas que han sido solucionados.                                                 |
| FIXME     | Problemas o errores en el código que necesitan ser corregidos más adelante.                   |
| HACK      | Atajos temporales, soluciones rápidas o técnicas de programación poco ortodoxas utilizadas.    |
| IDEA      | Ideas para mejorar el código o agregar nuevas funcionalidades.                                |
| INFO      | Proporcionar información adicional que pueda ser útil para entender el código.               |
| NOTE      | Notas y comentarios adicionales que pueden ayudar a comprender mejor el código.               |
| QUESTION  | Hacer preguntas sobre cómo funciona el código o sobre posibles soluciones.                   |
| SOLUTION  | Proporcionar soluciones y código para abordar un problema específico.                         |
| STOPSHIP  | Indicar problemas graves que impiden la publicación del código.                               |
| TEMP      | Indicar código temporal que se eliminará más adelante.                                        |
| TIP       | Proporcionar consejos útiles para el uso del código.                                          |
| TODO-NEXT | Indicar la siguiente tarea pendiente en la lista de tareas.                                   |
| TODO      | Tareas pendientes que deben completarse en el futuro.                                         |
| TRACE     | Indicar dónde se están escribiendo trazas de registro en el código.                            |
| TYPE      | Describir el tipo de datos que se espera o devuelve una función o método.                     |
| URL       | Proporcionar enlaces a recursos externos relevantes.                                          |
| WARNING   | Advertir sobre posibles problemas o riesgos asociados con el código.                          |
| WONTFIX   | Indicar problemas que no serán resueltos o que no son importantes para el momento.            |


```json
//.vscode\settings.json
{
  "editor.formatOnSave": false,
  "better-comments.tags": [
    {
      "tag": "BUG",
      "color": "#FF2D00"
    },
    {
      "tag": "DEBUG",
      "color": "#007ACC"
    },
    {
      "tag": "EXAMPLE",
      "color": "#008000"
    },
    {
      "tag": "FEATURE",
      "color": "#B31B1B"
    },
    {
      "tag": "FIXED",
      "color": "#006B75"
    },
    {
      "tag": "FIXME",
      "color": "#FB9A00"
    },
    {
      "tag": "HACK",
      "color": "#8B008B"
    },
    {
      "tag": "IDEA",
      "color": "#9933FF"
    },
    {
      "tag": "INFO",
      "color": "#808080"
    },
    {
      "tag": "NOTE",
      "color": "#87CEEB"
    },
    {
      "tag": "QUESTION",
      "color": "#FF7F50"
    },
    {
      "tag": "SOLUTION",
      "color": "#4CAF50"
    },
    {
      "tag": "STOPSHIP",
      "color": "#DC143C"
    },
    {
      "tag": "TEMP",
      "color": "#FFD700"
    },
    {
      "tag": "TIP",
      "color": "#FF1493"
    },
    {
      "tag": "TODO-NEXT",
      "color": "#BF5FFF"
    },
    {
      "tag": "TODO",
      "color": "#FFA500"
    },
    {
      "tag": "TRACE",
      "color": "#6A5ACD"
    },
    {
      "tag": "TYPE",
      "color": "#0000FF"
    },
    {
      "tag": "URL",
      "color": "#00FFFF"
    },
    {
      "tag": "WARNING",
      "color": "#FF4500"
    },
    {
      "tag": "WONTFIX",
      "color": "#808080"
    }
  ]
}
```