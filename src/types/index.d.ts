interface OpenInNewWindowParams {
    reactPath: string,
    channel: string,
    data: any
}

interface SendToWindowParams {
    reactPath: string,
    channel: string,
    data: any
}

declare global {
    interface Window {
        require: (modulePath: string) => any;

        ipcRenderer: any;
        path: any;
        paths: {
            app: string,
            appData: string,
            tmp: string,
        };
        fs: any;
        childProcess: any;
        electronStorage: any;
        electronEnv: {
            home: string;
        };

        onMinimize: () => void;
        onMaximize: () => void;
        onClose: () => void;

        api: {
            openFileInWindows: (path: string) => void;
            openNewWindow: (params: OpenInNewWindowParams) => void;
            sendToWindow: (params: SendToWindowParams) => void;
            openDirectoryPicker: (callback: (directoryPath: string) => void) => void;
            openDirectoryInExplorer: (directoryPath: string) => void;
        }
    }
}

export {}
