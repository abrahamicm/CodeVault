//  ver el nombre de las clases css disponibles en el documento
var styleSheets = document.styleSheets;
for (var i = 0; i < styleSheets.length; i++) {
  var sheet = styleSheets[i];

  for (var j = 0; j < sheet.cssRules.length; j++) {
    var rule = sheet.cssRules[j];

    if (rule.selectorText && rule.selectorText.indexOf('.') === 0) {
      var className = rule.selectorText.slice(1);

      console.log(className);
    }
  }
}


function obtenerBreakpoints() {
    // Obtén todas las hojas de estilo en el documento
    var hojasDeEstilo = document.styleSheets;

    // Recorre cada hoja de estilo
    for (var i = 0; i < hojasDeEstilo.length; i++) {
        var reglasDeEstilo;
        
        try {
            // Algunas hojas de estilo pueden tener reglas bloqueadas por políticas de CORS
            reglasDeEstilo = hojasDeEstilo[i].cssRules || hojasDeEstilo[i].rules;
        } catch (error) {
            console.error('No se puede acceder a las reglas de estilo de la hoja de estilo:', hojasDeEstilo[i]);
            continue;
        }

        // Recorre cada regla de estilo
        for (var j = 0; j < reglasDeEstilo.length; j++) {
            // Verifica si la regla es una media query
            if (reglasDeEstilo[j].type === CSSRule.MEDIA_RULE) {
                console.log('Media Query:', reglasDeEstilo[j].media.mediaText);
            }
        }
    }
}

// Llama a la función para obtener los breakpoints
obtenerBreakpoints();
