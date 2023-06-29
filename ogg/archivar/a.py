import pyttsx3
import os

def crear_archivo_ogg(texto):
    engine = pyttsx3.init()
    ruta_actual = os.path.dirname(os.path.abspath(__file__))
    ruta_archivo = os.path.join(ruta_actual, 'salida2.ogg')
    engine.save_to_file(texto, ruta_archivo)
    engine.runAndWait()
    engine.stop()

texto = "¡Hola! Este es un ejemplo de texto a voz."

crear_archivo_ogg(texto)
