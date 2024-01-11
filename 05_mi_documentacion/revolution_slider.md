
# Inicializar el slider basado en el atributo ID del Slider
```javascript
var revapi = jQuery('#rev_slider_1').show().revolution({
    /* CONFIGURACIONES DEL SLIDER AQUÍ */
});
```

# Ejemplo de uso de la nueva variable API para llamar a métodos y eventos para el Slider
```javascript
    var revapi = jQuery(document).ready(function() {
        jQuery('#rev_slider_1').show().revolution({
            /* CONFIGURACIONES DEL SLIDER AQUÍ */
        });
    });
    revapi.one('revolution.slide.onloaded', function() {
        // console.log('slider cargado');
    });
```

## Eventos de la API

### Escuchar cuando el Slider se ha cargado oficialmente

```javascript
revapi.one('revolution.slide.onloaded', function() {
     console.log('slider cargado');
});
```

### Escuchar cuando se cambian los Slides

```javascript
revapi.on('revolution.slide.onchange', function(event, data) {
    // data.slideIndex   = Índice actual del Slide (comenzando desde cero)
    // data.currentslide = Slide actual como objeto jQuery
    // data.prevslide    = Slide anterior como objeto jQuery
});
```

### Escuchar el momento ANTES de que los Slides estén a punto de cambiar

```javascript
revapi.on('revolution.slide.onbeforeswap', function (event, data) {
    // data.currentslide = Slide actual como objeto jQuery
    // data.nextslide    = Próximo Slide como objeto jQuery
});
```

### Escuchar el momento DESPUÉS de que los Slides han terminado de cambiar

```javascript
revapi.on('revolution.slide.onafterswap', function (event, data) {
    // data.currentslide  = Slide actual como objeto jQuery
    // data.previousslide = Slide anterior como objeto jQuery
});
```

### Escuchar cuando las capas se animan dentro y fuera de la vista

```javascript
revapi.on('revolution.slide.layeraction', function(event, data) {
    /*
        enterstage:   El momento en que la capa comienza a animarse hacia la vista
        enteredstage: El momento en que la animación inicial de la capa ha terminado
        leavestage:   El momento en que la capa comienza a animarse fuera de la vista
        leftstage:    El momento en que la capa ha terminado de animarse fuera de la vista
    */
    // data.eventtype     = Estado de la animación: 'enterstage', 'enteredstage', 'leavestage', 'leftstage'

    // data.layertype     = Tipo de capa (imagen, video, html)
    // data.layersettings = Configuraciones predeterminadas para la capa
    // data.layer         = Capa como objeto jQuery
});
```

### Escuchar cuando un video comienza a reproducirse

```javascript
revapi.on('revolution.slide.onvideoplay', function(event, data) {
    // data.video = API del video para gestionar funciones de video
    // data.videotype = youtube, vimeo, html5
    // data.settings = Configuraciones del video
    switch(data.videotype) {
        case 'youtube':
            // data.video = Referencia a la API de YouTube iframe:
            // https://developers.google.com/youtube/iframe_api_reference#Playback_controls

        break;
        case 'vimeo':
            // data.video = Referencia a la API de Vimeo iframe
            // https://github.com/vimeo/player.js
        break;
        case 'html5':
            // data.video = Elemento de video HTML:
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
        break;
    }
});
```

### Escuchar cuando la reproducción de un video se detiene

```javascript
revapi.on('revolution.slide.onvideostop', function(event, data) {
    // data.video = API del video para gestionar funciones de video
    // data.videotype = youtube, vimeo, html5
    // data.settings = Configuraciones del video
    switch(data.videotype) {
        case 'youtube':

            // data.video = Referencia a la API de YouTube iframe:
            // https://developers.google.com/youtube/iframe_api_reference#Playback_controls
        break;
        case 'vimeo':
            // data.video = Referencia a la API de Vimeo iframe
            // https://github.com/vimeo/player.js
        break;
        case 'html5':
            // data.video = Elemento de video HTML:
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
        break;
    }

});
```

### Escuchar cuando se pausa el progreso del Slider

```javascript
revapi.on('revolution.slide.onpause', function() {
    // El progreso del Slider ha sido pausado
});
```

### Escuchar cuando se reanuda el progreso del Slider

```javascript
revapi.on('revolution.slide.onresume', function() {
    // El progreso del Slider se ha reanudado
});
```

### Escuchar cuando el Slider ha alcanzado el último Slide

```javascript
revapi.on('revolution.slide.slideatend', function() {
    // El Slider ha alcanzado el último Slide
});
```

### Escuchar cuando el Slider ha alcanzado el Slide "Stop At"

```javascript


    var revapi = jQuery(document).ready(function() {
        jQuery('#rev_slider_1').show().revolution({
            stopLoop: 'on',
            stopAfterLoops: 0,
            stopAtSlide: 3,
            /* CONFIGURACIONES DEL SLIDER CONTINUADAS */
        });
    });
    // Escuchar cuando se alcanza el Slide "stopAtSlide" establecido arriba
    revapi.on('revolution.slide.onstop', function() {
        // El Slider ha alcanzado el Slide "stopAtSlide" (Slide #3)
    });
```

## Métodos de la API

### Cargar el Slider a pedido

```javascript
    var revapi = jQuery(document).ready(function() {
        jQuery('#rev_slider_1').show().revolution({
            waitForInit: true,
            /* CONFIGURACIONES DEL SLIDER CONTINUADAS */
        });
    });

    // Iniciar el slider solo una vez que toda la ventana haya cargado
    jQuery(window).one('load', function() {
        revapi.revstart();
    });

```

### Pausar el progreso del Slider

```javascript
revapi.revpause();
```

### Reanudar el progreso del Slider

```javascript
revapi.revresume();
```

### Navegar al Slide anterior

```javascript
revapi.revprev();
```

### Navegar al siguiente Slide

```javascript
revapi.revnext();
```

### Navegar a un Slide en particular

```javascript
// Número de índice del Slide comenzando desde 0
revapi.revshowslide(2);
```

### Forzar al Slider a redimensionarse

```javascript
revapi.revredraw();
```

### Obtener el índice del Slide actual

```javascript
var currentSlide = revapi.revcurrentslide();
```

### Obtener el número total de Slides

```javascript
var totalSlides = revapi.revmaxslide();
```

### Desplazarse debajo del Slider

```javascript
// desplazarse debajo del slider, más 50 píxeles adicionales
revapi.revscroll(50);
```

### Mostrar un Slide con un atributo de ID particular

```javascript
revapi.revcallslidewithid('slide-list-item-id-attribute');
```

### Eliminar dinámicamente un Slide del Slider

```javascript
revapi.revremoveslide(3);
```

### Destruir la instancia del Slider

```javascript
revapi.revkill();
```