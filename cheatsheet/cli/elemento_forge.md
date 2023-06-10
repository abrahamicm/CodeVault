1. Instalación de Electron Forge:
   ```shell
   npm install -g electron-forge
   ```

2. Crear un nuevo proyecto:
   ```shell
   electron-forge init mi-proyecto
   ```

3. Iniciar la aplicación en modo de desarrollo:
   ```shell
   cd mi-proyecto
   electron-forge start
   ```

4. Construir la aplicación para distribución:
   ```shell
   electron-forge make
   ```

5. Empaquetar la aplicación para una plataforma específica (por ejemplo, Windows):
   ```shell
   electron-forge package --platform=win32
   ```

6. Empaquetar la aplicación para todas las plataformas:
   ```shell
   electron-forge package
   ```

7. Publicar la aplicación (requiere configuración previa):
   ```shell
   electron-forge publish
   ```

8. Configurar opciones adicionales en el archivo `forge.config.js`, como el nombre de la aplicación, el icono, las URL de actualización, etc.
