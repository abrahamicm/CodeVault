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