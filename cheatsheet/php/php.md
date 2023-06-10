## PHP Cheatsheet

### Sintaxis básica

1. **Comentarios**: 
   ```php
   // Comentario de una línea

   /* Comentario
   de varias
   líneas */
   ```

2. **Variables**:
   ```php
   $nombre = "John";
   $edad = 25;
   ```

3. **Salida de texto**:
   ```php
   echo "Hola, Mundo!";

   // Concatenación
   echo "Mi nombre es " . $nombre;
   ```

4. **Estructuras condicionales**:
   ```php
   if ($edad > 18) {
     echo "Eres mayor de edad";
   } elseif ($edad > 12) {
     echo "Eres un adolescente";
   } else {
     echo "Eres un niño";
   }
   ```

5. **Bucles**:
   - Bucle `for`:
     ```php
     for ($i = 0; $i < 5; $i++) {
       echo $i;
     }
     ```

   - Bucle `while`:
     ```php
     $i = 0;
     while ($i < 5) {
       echo $i;
       $i++;
     }
     ```

6. **Funciones**:
   ```php
   function saludar($nombre) {
     echo "Hola, " . $nombre;
   }

   saludar("John");
   ```

### Manipulación de cadenas de texto

1. **Concatenación**:
   ```php
   $nombre = "John";
   $apellido = "Doe";
   $nombreCompleto = $nombre . " " . $apellido;
   echo $nombreCompleto;
   ```

2. **Longitud de una cadena**:
   ```php
   $texto = "Hola, Mundo!";
   $longitud = strlen($texto);
   echo $longitud;
   ```

3. **Mayúsculas y minúsculas**:
   ```php
   $texto = "Hola, Mundo!";
   $textoMayusculas = strtoupper($texto);
   $textoMinusculas = strtolower($texto);
   echo $textoMayusculas;
   echo $textoMinusculas;
   ```

4. **Extracción de partes de una cadena**:
   ```php
   $texto = "Hola, Mundo!";
   $subcadena = substr($texto, 0, 4);
   echo $subcadena; // Imprime "Hola"
   ```

### Manipulación de arrays

1. **Crear un array**:
   ```php
   $colores = array("rojo", "verde", "azul");
   ```

2. **Acceder a elementos**:
   ```php
   echo $colores[0]; // Imprime "rojo"
   ```

3. **Recorrer un array**:
   - Bucle `for`:
     ```php
     for ($i = 0; $i < count($colores); $i++) {
       echo $colores[$i];
     }
     ```

   - Bucle `foreach`:
     ```php
     foreach ($colores as $color) {
       echo $color;
     }
     ```

4. **Agregar elementos**:
   ```php
   $colores[] = "amarillo";
   ```

5. **Eliminar elementos**:
   ```php
   unset($colores[1]);
   ```

### Funciones predefin

idas

1. **Fecha y hora**:
   ```php
   echo date("Y-m-d"); // Imprime la fecha actual en formato YYYY-MM-DD
   echo date("H:i:s"); // Imprime la hora actual en formato HH:MM:SS
   ```

2. **Manipulación de fechas**:
   ```php
   $fecha = strtotime("next Monday");
   echo date("Y-m-d", $fecha);
   ```

3. **Archivo de inclusión**:
   ```php
   include "archivo.php";
   require "archivo.php"; // Genera un error fatal si el archivo no se encuentra
   ```

4. **Envío de correo electrónico**:
   ```php
   $destinatario = "correo@example.com";
   $asunto = "Correo de prueba";
   $mensaje = "Hola, esto es un correo de prueba";
   $cabeceras = "From: remitente@example.com";
   mail($destinatario, $asunto, $mensaje, $cabeceras);
   ```
