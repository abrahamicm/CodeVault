// mostrar el nombre de las columnas en la vista de las estructuras
document.querySelectorAll("#tablestructure > tbody > tr > th").forEach(x=>console.log(x.innerText))

// toda la columna para editar el texto y formatear
document.querySelectorAll("#tablestructure > tbody > tr").forEach(x=>console.log(x.innerText))