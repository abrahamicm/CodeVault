
## Electron Cheatsheet

### Configuración y creación de un proyecto Electron

1. **Instalar Electron**: `npm install electron`

2. **Crear archivo principal**: Crear un archivo `main.js` en la raíz del proyecto.

3. **Crear archivo HTML**: Crear un archivo `index.html` en la raíz del proyecto.

4. **Configurar archivo `main.js`**:
   ```javascript
   const { app, BrowserWindow } = require('electron');

   function createWindow() {
     const win = new BrowserWindow({
       width: 800,
       height: 600,
       webPreferences: {
         nodeIntegration: true
       }
     });

     win.loadFile('index.html');
   }

   app.whenReady().then(createWindow);
   ```

5. **Configurar archivo `package.json`**:
   ```json
   {
     "name": "nombre-proyecto",
     "version": "1.0.0",
     "main": "main.js",
     "scripts": {
       "start": "electron ."
     }
   }
   ```

### Funcionalidades básicas de Electron

1. **Crear ventana principal**:
   ```javascript
   const win = new BrowserWindow({
     width: 800,
     height: 600,
     webPreferences: {
       nodeIntegration: true
     }
   });
   win.loadFile('index.html');
   ```

2. **Interacción con eventos de ventana**:
   ```javascript
   win.on('closed', () => {
     // Acciones cuando la ventana es cerrada
   });
   ```

3. **Crear una nueva ventana**:
   ```javascript
   let newWin;
   function createNewWindow() {
     newWin = new BrowserWindow({ width: 800, height: 600 });
     newWin.loadFile('newWindow.html');
   }
   ```

4. **Interacción con el sistema operativo**:
   ```javascript
   const { app } = require('electron');

   app.on('ready', () => {
     // Acciones cuando la aplicación está lista
   });

   app.on('window-all-closed', () => {
     if (process.platform !== 'darwin') {
       app.quit();
     }
   });

   app.on('activate', () => {
     if (BrowserWindow.getAllWindows().length === 0) {
       createWindow();
     }
   });
   ```

5. **Comunicación entre procesos**:
   - Comunicación del proceso principal al proceso de renderizado:
     ```javascript
     // En el proceso principal
     win.webContents.send('mensaje', 'Hola desde el proceso principal');

     // En el proceso de renderizado
     ipcRenderer.on('mensaje', (event, arg) => {
       console.log(arg); // Imprime 'Hola desde el proceso principal'
     });
     ```

   - Comunicación del proceso de renderizado al proceso principal:
     ```javascript
     // En el proceso de renderizado
     ipcRenderer.send('mensaje', 'Hola desde el proceso de renderizado');

     // En el proceso principal
     ipcMain.on('mensaje', (event, arg) => {
       console.log(arg); // Imprime 'Hola desde el proceso de renderizado'
     });
     ```

### Empaquetado y distribución de la aplicación

1. **Empaquetar la aplicación**:
   - Para macOS: `electron-packager . NombreAplicacion --platform=darwin`
   - Para Windows: `electron-packager . NombreAplicacion --platform=

win32`
   - Para Linux: `electron-packager . NombreAplicacion --platform=linux`

2. **Crear instalador**:
   - Para macOS: `electron-installer-dmg inputPath outputPath --appdmg`

3. **Crear archivo ejecutable**:
   - Para Windows: `electron-builder --win`
