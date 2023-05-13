import { app, BrowserWindow, ipcMain } from 'electron';
import * as localShortcut from 'electron-localshortcut';
import * as path from 'path';

import { constructAppPath } from './electronUtils';

let mainWindow: BrowserWindow | null = null;

function createWindow() {
    // We cannot require the screen module until the app is ready.
  const { screen } = require('electron');
  const { scaleFactor } = screen.getPrimaryDisplay();

  mainWindow = new BrowserWindow({
    width: 1000, 
    height: 600,
    minWidth: 500,
    minHeight: 300,
    frame: false,
    show: false,
    backgroundColor: '#313440',
    webPreferences: {
      zoomFactor: 1.0 / scaleFactor,
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  mainWindow.loadURL(constructAppPath());
  if (!app.isPackaged) {
    // mainWindow.webContents.openDevTools();

    // Hot Reloading on 'node_modules/.bin/electronPath'
    // require('electron-reload')(__dirname, {
    //   electron: path.join(__dirname,
    //     '..',
    //     '..',
    //     'node_modules',
    //     '.bin',
    //     'electron' + (process.platform === "win32" ? ".cmd" : "")),
    //   forceHardReset: true,
    //   hardResetMethod: 'exit'
    // });
  }

  mainWindow.show();

  localShortcut.register(mainWindow, 'F5', function() {
    console.log('F5 is pressed');
    if (!mainWindow) return;

    mainWindow.reload();
  })
  localShortcut.register(mainWindow, 'CommandOrControl+R', function() {
      console.log('CommandOrControl+R is pressed');
      if (!mainWindow) return;

      mainWindow.reload();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});
