const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      webSecurity: false // Temporary for debugging ERR_FAILED
    },
    icon: path.join(__dirname, 'icon-512.png')
  });

  // Use absolute path with proper file URL formatting
  const indexPath = path.join(__dirname, 'index.html');
  const indexUrl = url.pathToFileURL(indexPath).href;

  console.log('Attempting to load:', indexUrl);

  win.loadURL(indexUrl).catch(err => {
    console.error('Failed to load index.html:', err);
  });

  win.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
    console.error(`Load failed: ${errorCode} ${errorDescription} URL: ${validatedURL}`);
  });

  win.webContents.openDevTools(); 
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
