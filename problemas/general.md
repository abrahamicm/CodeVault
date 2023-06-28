# rv no dimenciona correctamente e banner 
- problema: revolicion slider no dimenciona correctamente el banner y no ocupa el maximo de pantalla
- solucion: redimencionar la pantalla medio segundo despues de que carque todo

```javascript
<script>
  window.addEventListener("load", function() {
    if (typeof revapi1 !== "undefined") {
      setTimeout(function() {
        revapi1.revredraw();
        //console.log("revapi1 está definido y revredraw() ha sido llamado después de un retraso de 500 ms.");
      }, 500);
    } else {
     // console.log("revapi1 no está definido en esta página.");
    }
  });
</script>
```
