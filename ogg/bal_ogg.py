import re
import os
import unicodedata
import subprocess
from pydub import AudioSegment

def quitar_acentos(texto):
    resultado = ''
    for caracter in texto:
        caracter_sin_acento = unicodedata.normalize('NFD', caracter).encode('ascii', 'ignore').decode('utf-8')
        resultado += caracter_sin_acento
    return resultado


if not os.path.exists('lista.txt'):
    contenido_ejemplo = '''División 1
División 2
División 3'''

    with open('lista.txt', 'w') as file:
        file.write(contenido_ejemplo)
    print("El archivo lista.txt se ha creado con éxito.")
else:
    print("El archivo lista.txt ya existe.")

with open('lista.txt', 'r') as file:
    contenido = file.read()

contenido_sin_acentos = quitar_acentos(contenido)

contenido_sin_caracteres = re.sub('[^a-zA-Z0-9\n]+', ' ', contenido_sin_acentos)

saltos_de_linea = contenido_sin_caracteres.split('\n')
saltos_de_linea = [linea.strip() for linea in saltos_de_linea if linea.strip()]

directorio_wav = "archivos_wav"
directorio_ogg = "archivos_ogg"
os.makedirs(directorio_wav, exist_ok=True)
os.makedirs(directorio_ogg, exist_ok=True)

pendientes = []
archivos_wav = []
indices_convertidos = []
for i, division in enumerate(saltos_de_linea):
    nombre_archivo_wav = f'{division[:40]}.wav'  # Limitar el nombre a 40 caracteres
    try:
        with open(f'{division}.txt', 'w') as file:
            file.write(division)

        comando_balcon = f'balcon -f "{division}.txt" -w "{directorio_wav}/{nombre_archivo_wav}"  --voice1-name "Microsoft Helena Desktop" --voice1-langid es --delete-file'
        result = subprocess.run(comando_balcon, shell=True, capture_output=True, text=True)
        salida_balcon = result.stdout

        archivos_wav.append(nombre_archivo_wav)
        contenido_sin_caracteres = contenido_sin_caracteres.replace(division, '')
        indices_convertidos.append(i)

    except Exception as e:
        pendientes.append({'nombre_archivo': nombre_archivo_wav, 'razon': str(e)})

archivos_convertidos = []
for nombre_archivo_wav in archivos_wav:
    try:
        nombre_archivo_ogg = f'{os.path.splitext(nombre_archivo_wav)[0]}.ogg'
       
        audio = AudioSegment.from_wav(f'{directorio_wav}/{nombre_archivo_wav}')

        audio.export(f'{directorio_ogg}/{nombre_archivo_ogg}', format="ogg")

        archivos_convertidos.append(nombre_archivo_ogg)

        os.remove(f'{directorio_wav}/{nombre_archivo_wav}')

    except Exception as e:
        pendientes.append({'nombre_archivo': nombre_archivo_wav, 'razon': str(e)})

saltos_de_linea = [linea for i, linea in enumerate(saltos_de_linea) if i not in indices_convertidos]  # Eliminar líneas convertidas exitosamente

if pendientes:
    with open('pendientes.txt', 'w') as file:
        for pendiente in pendientes:
            file.write(f"Archivo: {pendiente['nombre_archivo']}, Razón: {pendiente['razon']}\n")

if archivos_convertidos:
    print("Archivos convertidos:")
    for archivo in archivos_convertidos:
        print(archivo)

if pendientes:
    print("Archivos pendientes:")
    for pendiente in pendientes:
        print(f"Archivo: {pendiente['nombre_archivo']}, Razón: {pendiente['razon']}")

# Actualizar el archivo lista.txt con las líneas restantes
with open('lista.txt', 'w') as file:
    file.write('\n'.join(saltos_de_linea))
