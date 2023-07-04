import os

directorio = './'  # El directorio actual donde se encuentra el script

# Crea un diccionario para almacenar las carpetas padres y su conteo de archivos
carpetas_padres = {}

# Recorre todos los archivos y directorios dentro del directorio actual
for archivo in os.listdir(directorio):
    ruta_archivo = os.path.join(directorio, archivo)
    # Verifica si es un directorio
    if os.path.isdir(ruta_archivo):
        # Cuenta los archivos dentro del directorio
        num_archivos = sum(len(files) for _, _, files in os.walk(ruta_archivo))
        carpetas_padres[archivo] = num_archivos

# Muestra los resultados
for carpeta, num_archivos in carpetas_padres.items():
    print(f"{num_archivos} {carpeta}")
