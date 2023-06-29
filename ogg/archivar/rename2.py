import re
import os
import unicodedata

def quitar_acentos(texto):
    resultado = ''
    for caracter in texto:
        caracter_sin_acento = unicodedata.normalize('NFD', caracter).encode('ascii', 'ignore').decode('utf-8')
        resultado += caracter_sin_acento
    return resultado

# Paso 1: Leer el archivo.txt
with open('lista.txt', 'r') as file:
    contenido = file.read()

# Paso adicional: Quitar acentos del contenido
contenido_sin_acentos = quitar_acentos(contenido)

# Paso adicional: Quitar caracteres especiales utilizando una expresión regular
contenido_sin_caracteres = re.sub('[^a-zA-Z0-9\n]+', ' ', contenido_sin_acentos)

# Paso adicional: Eliminar espacios en blanco de los saltos de línea
saldos_de_linea = contenido_sin_caracteres.split('\n')
saldos_de_linea = [linea.strip() for linea in saldos_de_linea if linea.strip()]

# Paso 3 y 4: Crear archivos con el nombre de la división y su contenido
pendientes = []
archivos_convertidos = []
for i, division in enumerate(saldos_de_linea):
    # Obtener el nombre del archivo a partir del contenido
    nombre_archivo = f'{division}.txt'
    try:
        with open(nombre_archivo, 'w') as file:
            file.write(division)
        archivos_convertidos.append(nombre_archivo)
        # Borrar la línea del archivo original
        contenido_sin_caracteres = contenido_sin_caracteres.replace(division, '')
    except Exception as e:
        pendientes.append({'nombre_archivo': nombre_archivo, 'razon': str(e)})

# Paso 4 (continuación): Crear archivo de pendientes si existen
if pendientes:
    with open('pendientes.txt', 'w') as file:
        for pendiente in pendientes:
            file.write(f"Archivo: {pendiente['nombre_archivo']}, Razón: {pendiente['razon']}\n")

# Imprimir los archivos convertidos
if archivos_convertidos:
    print("Archivos convertidos:")
    for archivo in archivos_convertidos:
        print(archivo)

# Imprimir los archivos pendientes
if pendientes:
    print("Archivos pendientes:")
    for pendiente in pendientes:
        print(f"Archivo: {pendiente['nombre_archivo']}, Razón: {pendiente['razon']}")
