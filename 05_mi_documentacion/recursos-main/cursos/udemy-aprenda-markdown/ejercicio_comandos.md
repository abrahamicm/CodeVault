
# Encabezados

# encabezado H1
## encabezado H2
### encabezado H3
#### encabezado h4
##### encabezado h5
###### encabezado h6
--------
# Salto de linea

se ha dejado dos espacios  
este parrafo.  
fin.

linea uno\
linea dos\
linea tres\
fin.

linea uno<br>
linea dos<br>
linea tres<br>
fin.

-------

# negrita

**negrita la oración** no usa negrita
ahora  **una** palabra

-------

# italico

sin italico   
*con italico*   

--------
# Negrita + Itálico

***Esto está en negrita e itálico*** sin negrita

-------

# Línea Divisora (regla horizontal)

linea uno
---
linea dos
***
linea tres
- - -
fin.

--------

# Código fuente html

```html
<table>
  <tr>
    <td><input type="text" value="uno"></td>
  </tr>
</tabla>
```

# Codigo javascript

```javascript
        // eventos
        var a=0;
        function check(valor){
            if (a==0 ){
                a = a + 1 ;
                document.getElementById(valor).value = "O";
                document.getElementById(valor).disabled = true;
                validation();
            } else {
                a = a- 1;
                document.getElementById(valor).value = "X";
                document.getElementById(valor).disabled = true;
                validation();
            }
        }
```

---------

# Listas desordenadas

### Ejemplo de lista desordenadas con guion

- dato 1
- dato 2
    - sub dato 2.1
    - sub dato 2.2
    - sub dato 2.2
        - sub dato 2.2.1
        - sub dato 2.2.1

### Ejemplo de lista desordenadas con signo mas

+ dato 1
+ dato 2
    + sub dato 2.1
    + sub dato 2.2
    + sub dato 2.2
        + sub dato 2.2.1
        + sub dato 2.2.1

### Ejemplo de lista desordenadas con asterisco

* dato 1
* dato 2
    * sub dato 2.1
    * sub dato 2.2
    * sub dato 2.2
        * sub dato 2.2.1
        * sub dato 2.2.1

------------
# Listas ordenadas

### Ejemplo de lista ordenadas

1. primero
2. segundo
3. tercero

------

# Citas

# Creando una cita

> esta es una cita<br>
que estoy haciendo de
un autor famoso...   

fin de la cita

>> cita con doble nivel use doble espacio.  
tiene doble tabulación.

fin de la cita

>>> cita con triple nivel  
<- tiene doble espacio triple tabulación.

fin  de la cita

--------

# Tablas

## tablas

|col 1| col 2 | col 3 |  
|-----| ------|-------|
| lun | 10    | 20    |  
| mar | 30    | 23    |

fin...

## tablas con margenes

| col 1 | col 2 | col 3 |
|:------|:-----:|------:| 
| lun   | 10    | 120.00|
| mar   | 30    |  23.00|

fin...

-------

# Código (palabra)

## palabra en codigo

El codigo `<br>` se usa para salto de linea en HTML  
El codigo `echo` usado en PHP para mostrar en pantalla

---------

# Imágenes

## imagenes en el código

Imagen 1

![No aparece imagen](/ruta/a/la/imagen.jpg)

Imagen 2

![Texto si ni aparece imagen](https://www.w3.org/2008/site/images/logo-w3c-mobile-lg)

Imagen 3 con titulo hover

![Texto si ni aparece imagen](https://www.w3.org/2008/site/images/logo-w3c-mobile-lg "Logo de W3C")

Aqui se colocan las imagenes

![][img1]
![][img2]
![][img3]
![][img4]

Lista de imagenes

[img1]: https://img.icons8.com/flat_round/2x/bookmark-book.png
[img2]: https://img.icons8.com/flat_round/2x/delete-sign.png
[img3]: https://img.icons8.com/flat_round/2x/share--v4.png
[img4]: https://img.icons8.com/flat_round/2x/bookmark-ribbon.png

------------

# Caracteres de escape

## Caracteres especiales

\# evitamos el header   
\! evitamos la imagen y usamos el signo de admiración  
\| evitamos el pipe usado en las tablas  
\- evitamos el guion para las listas  

------------

# Links

## Link 

[visite mi blog](https://alexander4096.blogspot.com/)


