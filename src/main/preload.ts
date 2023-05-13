import { ipcRenderer, remote } from 'electron';
import * as path from 'path';
import { tmpdir } from 'os';
import * as fs from 'fs';
import * as childProcess from 'child_process';

import { constructAppPath } from './electronUtils';
import electronStorage from './electronStorage';

const appPath = remote.app.getAppPath();
electronStorage.setDefaultPath(path.join(appPath, 'src', 'data'));

window.ipcRenderer = ipcRenderer;
window.path = path;
window.paths = {
    app: appPath,
    appData: path.join(remote.app.getPath('appData'), 'Mitai'),
    tmp: tmpdir(),
};
window.fs = fs;
window.childProcess = childProcess;
window.electronStorage = electronStorage;


let curWindow;
let openWindows: any = {
    //  <react path>: <browser window>
};

window.onMinimize = () => {
    curWindow = remote.BrowserWindow.getFocusedWindow();
    if (!curWindow) return;

    curWindow.minimize();
};

window.onMaximize = () => {
    curWindow = remote.BrowserWindow.getFocusedWindow();
    if (!curWindow) return;

    if(curWindow.isMaximized())
        curWindow.restore();
    else
        curWindow.maximize();
};

window.onClose = () => {
    curWindow = remote.BrowserWindow.getFocusedWindow();
    if (!curWindow) return;
    
    curWindow.close();
};

window.api = {
    openFileInWindows: (path: string) => {
        remote.shell.openPath(path);
    },
    openNewWindow: async ({ reactPath, channel, data }) => {
        if (openWindows[reactPath]) {
            openWindows[reactPath].focus();
            return;
        }

        const { scaleFactor, bounds } = remote.screen.getPrimaryDisplay();
        
        const BrowserWindow = remote.BrowserWindow;
        let newWindow = new BrowserWindow({ 
            width: Math.round(bounds.width * 0.6 / scaleFactor), 
            height: Math.round(bounds.height * 0.7 / scaleFactor),
            minWidth: 500,
            minHeight: 300,
            frame: false,
            show: false,
            backgroundColor: '#313440',
            webPreferences: {
                nodeIntegration: true,
                preload: path.join(__dirname, 'preload.js'),
            }
        });
    
        newWindow.loadURL(constructAppPath(reactPath));
    
        newWindow.show();
        
        newWindow.on('closed', function () {
            openWindows[reactPath] = undefined;
            (newWindow as any) = null;
        });

        openWindows[reactPath] = newWindow;

        return new Promise((resolve, reject) => {
            newWindow.webContents.once('dom-ready', () => {
                resolve();
                // newWindow.webContents.send(channel, data);
            });

            setTimeout(() => {
                reject("Took to long for window to be ready");
            }, 10000);
        });
        

        // ipcMain.on('message-name', (event, arg) => {
        //     console.log(arg);
        //     event.returnValue = "test";
        //   })
    },
    sendToWindow: async ({ reactPath, channel, data }) => {
        if (!openWindows[reactPath]) {
            console.log(`No window open at ${reactPath}`);
            return;
        }

        openWindows[reactPath].focus();

        openWindows[reactPath].webContents.send(channel, data);
    },
    openDirectoryPicker: async (callback: (directoryPath: string) => void) => {
        const pathArray = await remote.dialog.showOpenDialog({properties: ['openDirectory']});
        callback(pathArray?.filePaths?.[0]);
    },
    openDirectoryInExplorer: async (directoryPath: string) => {
        remote.shell.openPath(directoryPath);
    },
};
