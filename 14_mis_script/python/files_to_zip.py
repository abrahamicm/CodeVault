import zipfile
import os

# Lista de archivos a comprimir
archivos = [
    'app/Http/Controllers/BillController.php',
    'app/Http/Controllers/GeneralController.php',
    'app/Http/Controllers/PartidaController.php',
    'app/Http/Controllers/ProductController.php',
    'app/Http/Requests/UpdateGeneralRequest.php',
    'app/Models/General.php',
    'database/seeders/RoleSeeder.php',
    'resources/views/bills/index.blade.php',
    'resources/views/generals/fields.blade.php',
    'resources/views/generals/index.blade.php',
    'resources/views/generals/table.blade.php',
    'resources/views/layouts/app.blade.php',
    'resources/views/partidas/index.blade.php',
    'resources/views/products/index.blade.php'
]

# Nombre del archivo comprimido
nombre_archivo = 'archivos_comprimidos.zip'

# Crear el archivo comprimido
with zipfile.ZipFile(nombre_archivo, 'w') as zipf:
    for archivo in archivos:
        zipf.write(archivo)

print('Archivos comprimidos exitosamente.')
