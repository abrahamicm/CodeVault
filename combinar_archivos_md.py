import os

def combinar_archivos_md(directorio):
    contenido_completo = ""

    for carpeta_actual, _, archivos in os.walk(directorio):
        for archivo in archivos:
            if archivo.endswith('.md'):
                archivo_md = os.path.join(carpeta_actual, archivo)
                with open(archivo_md, 'r', encoding='utf-8') as file:
                    contenido_archivo = file.read()
                    contenido_completo += f"\n# {os.path.splitext(archivo)[0]}\n\n{contenido_archivo}"

    # Guardar el contenido completo en un archivo de salida
    with open('archivo_combinado.md', 'w', encoding='utf-8') as output_file:
        output_file.write(contenido_completo)

if __name__ == "__main__":
    directorio_actual = os.getcwd()
    combinar_archivos_md(directorio_actual)
