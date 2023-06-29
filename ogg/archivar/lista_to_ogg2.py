import re
import os
import unicodedata
import pyttsx3
from pydub import AudioSegment

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
saltos_de_linea = contenido_sin_caracteres.split('\n')
saltos_de_linea = [linea.strip() for linea in saltos_de_linea if linea.strip()]

# Directorio de salida para los archivos OGG
directorio_salida = "archivos_ogg"
os.makedirs(directorio_salida, exist_ok=True)

# Configurar el motor de síntesis de voz
engine = pyttsx3.init()

# Paso 3 y 4: Crear archivos OGG con el nombre de la división y su contenido
pendientes = []
archivos_convertidos = []
for i, division in enumerate(saltos_de_linea):
    # Obtener el nombre del archivo a partir del contenido
    nombre_archivo = f'{division}.ogg'
    try:
        # Generar el archivo de audio OGG utilizando pyttsx3
        archivo_salida = os.path.join(directorio_salida, nombre_archivo)
        engine.save_to_file(division, archivo_salida)
        engine.runAndWait()

        # Convertir el archivo a formato OGG utilizando pydub (opcional, si pyttsx3 no lo hace automáticamente)
        audio = AudioSegment.from_file(archivo_salida)
        if audio.format != 'ogg':
            archivo_ogg = archivo_salida.replace('.wav', '.ogg')
            audio.export(archivo_ogg, format='ogg')
            os.remove(archivo_salida)
            archivo_salida = archivo_ogg

        archivos_convertidos.append(nombre_archivo)
        # Borrar la línea del archivo original
        contenido_sin_caracteres = contenido_sin_caracteres.replace(division, '')

        # Imprimir la ruta del archivo generado
        print(f"Archivo de audio generado para '{division}': {archivo_salida}")
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
