function listarClasesCSS() {
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
}

// listarClasesCSS();


function obtenerInformacionFuentes() {
  var allElements = document.querySelectorAll('*');
  var fontInfo = {};
  allElements.forEach(function (element) {
    var computedStyle = window.getComputedStyle(element);
    var fontFamily = computedStyle.fontFamily;
    var fontSize = computedStyle.fontSize;
    if (fontFamily && fontSize) {
      if (!fontInfo[fontFamily]) {
        fontInfo[fontFamily] = [];
      }
      fontInfo[fontFamily].push(fontSize);
    }
  });

  console.log('Información de fuentes y tamaños de texto:');
  console.log(fontInfo);
  return fontInfo;
}

// obtenerInformacionFuentes();


function buscarClasesConPropiedad(propiedadCSS) {
  var styleSheets = document.styleSheets;

  for (var i = 0; i < styleSheets.length; i++) {
    var sheet = styleSheets[i];

    for (var j = 0; j < sheet.cssRules.length; j++) {
      var rule = sheet.cssRules[j];

      if (rule.selectorText && rule.style && rule.style[propiedadCSS]) {
        var className = rule.selectorText.slice(1);

        console.log(`Clase con ${propiedadCSS}: ${className}`);
      }
    }
  }
}

// buscarClasesConPropiedad('display');

