import os
import re

script_dir = os.path.dirname(os.path.abspath(__file__))
file_list = os.listdir(script_dir)

failed_files = []

for file_name in file_list:
    if file_name.endswith('.txt') and file_name != 'lista.txt':
        file_path = os.path.join(script_dir, file_name)
        try:
            with open(file_path, 'r') as file:
                first_line = file.readline().strip()
            # Reemplazar caracteres especiales y guion por espacios en blanco en el nombre del archivo
            new_file_name = re.sub(r'[^\w\s.]', ' ', first_line)
            new_file_name = new_file_name.replace('-', ' ')
            new_file_name = new_file_name.strip() + ".txt"
            new_file_path = os.path.join(script_dir, new_file_name)
            os.rename(file_path, new_file_path)
        except:
            failed_files.append(file_name)

if failed_files:
    print("Algunos archivos no pudieron ser renombrados:")
    for failed_file in failed_files:
        print(failed_file)
else:
    print("La operación de renombrado ha finalizado correctamente.")
