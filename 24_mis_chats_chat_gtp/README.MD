# puedo darle estilo al contenido de un iframe desde su html padre?

Sí, es posible aplicar estilos CSS al contenido de un iframe desde su HTML padre utilizando la técnica conocida como "cross-document messaging" o mensajes entre documentos.

Para hacer esto, primero debes asegurarte de que el iframe y el HTML padre se encuentren en el mismo dominio. Luego, puedes utilizar JavaScript para enviar mensajes del HTML padre al iframe, utilizando el método `postMessage()`, y luego aplicar los estilos necesarios dentro del iframe.

Por ejemplo, supongamos que tienes un iframe con el ID "miIframe" y quieres cambiar el color de fondo de su contenido desde el HTML padre. El siguiente código podría hacerlo:

```javascript
// Obtener referencia al iframe
var iframe = document.getElementById('miIframe');

// Enviar mensaje al iframe para cambiar el color de fondo
iframe.contentWindow.postMessage({type: 'changeBackground', color: 'red'}, '*');
```

Luego, dentro del HTML del iframe, debes escuchar los mensajes enviados desde el padre y aplicar los cambios de estilo correspondientes.

```javascript
// Escuchar mensajes enviados desde el HTML padre
window.addEventListener('message', function(event) {
  if (event.data.type === 'changeBackground') {
    // Aplicar cambio de color de fondo
    document.body.style.backgroundColor = event.data.color;
  }
});
```

Es importante tener en cuenta que esta técnica puede presentar algunos desafíos de seguridad, por lo que debes asegurarte de validar cuidadosamente cualquier mensaje recibido en el HTML del iframe antes de aplicar cambios de estilo.