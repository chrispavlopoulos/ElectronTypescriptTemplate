declare module 'electron-localshortcut' {
    export function register(
        mainWindow: any,
        key: string,
        callback: () => void,
    ): void
}