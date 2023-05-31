## Aquí tienes un resumen de algunos de los comandos más útiles de "pip":

**Instalar y desinstalar paquetes**
- `pip install <nombre_del_paquete>`: instala un paquete.
- `pip install <ruta_al_archivo>`: instala un paquete desde un archivo ZIP o tarball.
- `pip uninstall <nombre_del_paquete>`: desinstala un paquete.

**Actualizar paquetes**
- `pip list --outdated`: muestra una lista de paquetes instalados que tienen nuevas versiones disponibles.
- `pip install --upgrade <nombre_del_paquete>`: actualiza un paquete a la última versión.
- `pip install --upgrade pip`: actualiza pip a la última versión.

**Mostrar información sobre paquetes**
- `pip list`: muestra una lista de todos los paquetes instalados.
- `pip show <nombre_del_paquete>`: muestra información detallada sobre un paquete en particular.
- `pip search <término_de_búsqueda>`: busca paquetes en el índice público de PyPI.

**Crear y utilizar entornos virtuales**
- `pip install virtualenv`: instala la biblioteca "virtualenv", que permite crear entornos virtuales.
- `virtualenv <nombre_del_entorno>`: crea un nuevo entorno virtual.
- `source <nombre_del_entorno>/bin/activate` (Linux/Mac) o `<nombre_del_entorno>\Scripts\activate.bat` (Windows): activa el entorno virtual.
- `deactivate`: desactiva el entorno virtual.

**Especificación de requisitos**
- `pip freeze`: muestra la lista de los paquetes instalados junto con sus versiones, en un formato que se puede usar para replicar el entorno en otro sistema.
- `pip freeze > requirements.txt`: guarda la lista de paquetes instalados en un archivo "requirements.txt".
- `pip install -r requirements.txt`: instala todos los paquetes enumerados en un archivo "requirements.txt".

