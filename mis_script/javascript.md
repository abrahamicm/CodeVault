```javascript
#[wordpress] #[javascript]
var ids= [1808,1800,3198,4818,2278,1792,2935,3734,2193,1806,3271]

ids.forEach(x=>{
	const check_id = "cb-select-"+x
    document.getAnimations(check_id).click()
})

// ver el nombre de las clases css disponibles en el documento
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
````