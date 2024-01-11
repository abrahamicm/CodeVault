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



function obtenerInformacionColores() {
  // Obtener todos los elementos del documento
  var allElements = document.querySelectorAll('*');

  // Inicializar un objeto para almacenar la información de colores
  var colorInfo = {};

  // Iterar sobre cada elemento y obtener la información de colores
  allElements.forEach(function (element) {
    var computedStyle = window.getComputedStyle(element);
    var color = computedStyle.color;

    // Agregar la información al objeto colorInfo
    if (color) {
      if (!colorInfo[color]) {
        colorInfo[color] = 0;
      }
      colorInfo[color]++;
    }
  });

  // Mostrar la información en la consola
  console.log('Información de colores utilizados:');
  console.log(colorInfo);

  // Devolver el objeto con la información
  return colorInfo;
}

// Llama a la función para obtener la información
obtenerInformacionColores();


function mostrarInformacionEstilosUnicos() {
  // Obtener todos los elementos del documento
  var allElements = document.querySelectorAll('*');

  // Inicializar conjuntos para almacenar estilos únicos
  var coloresUnicos = new Set();
  var fondosUnicos = new Set();
  var tamanosTextoUnicos = new Set();

  // Iterar sobre cada elemento y obtener la información de estilos
  allElements.forEach(function (element) {
    var computedStyle = window.getComputedStyle(element);

    // Obtener información de color
    var color = computedStyle.color;
    if (color) {
      coloresUnicos.add(color);
    }

    // Obtener información de fondo
    var fondo = computedStyle.backgroundColor;
    if (fondo) {
      fondosUnicos.add(fondo);
    }

    // Obtener información de tamaño de texto
    var tamanoTexto = computedStyle.fontSize;
    if (tamanoTexto) {
      tamanosTextoUnicos.add(tamanoTexto);
    }
  });

  // Mostrar la información en la consola con colores
  console.log('%cInformación de estilos utilizados:', 'color: blue; font-weight: bold;');

  // Mostrar información de colores
  console.log('%cColores:', 'color: green; font-weight: bold;');
  coloresUnicos.forEach(function (color) {
    var colorHex = obtenerValorHexadecimal(color);
    console.log(`%c${color} (${colorHex})`, `color: ${color}; background-color: #f0f0f0; padding: 2px;`);
  });

  // Mostrar información de fondos
  console.log('%cFondos:', 'color: green; font-weight: bold;');
  fondosUnicos.forEach(function (fondo) {
    var fondoHex = obtenerValorHexadecimal(fondo);
    console.log(`%c${fondo} (${fondoHex})`, `background-color: ${fondo}; padding: 2px;`);
  });

  // Mostrar información de tamaños de texto
  console.log('%cTamaños de Texto:', 'color: green; font-weight: bold;');
  tamanosTextoUnicos.forEach(function (tamanoTexto) {
    console.log(`%c${tamanoTexto}`, `font-size: ${tamanoTexto};`);
  });

  // Devolver los conjuntos con la información de estilos
  return {
    coloresUnicos,
    fondosUnicos,
    tamanosTextoUnicos,
  };
}

// Función para convertir un color a formato hexadecimal
function obtenerValorHexadecimal(color) {
  // Crear un elemento div para aplicar el color
  var div = document.createElement('div');
  div.style.color = color;
  document.body.appendChild(div);

  // Obtener el color calculado en formato hexadecimal
  var colorHex = window.getComputedStyle(div).color;

  // Convertir el color RGB a hexadecimal utilizando un pequeño truco
  var match = colorHex.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (match) {
    // Construir el valor hexadecimal
    colorHex = '#' + ('0' + parseInt(match[1], 10).toString(16)).slice(-2) +
                     ('0' + parseInt(match[2], 10).toString(16)).slice(-2) +
                     ('0' + parseInt(match[3], 10).toString(16)).slice(-2);
  }

  // Eliminar el elemento div creado
  document.body.removeChild(div);

  // Devolver el valor hexadecimal
  return colorHex;
}


// Llama a la función para obtener la información
mostrarInformacionEstilosUnicos();
