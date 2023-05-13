declare module 'react-dropzone' {
    export function useDropzone ({
        accept: string
    }): {
        getRootProps: any,
        getInputProps: any,
        isFocused: any,
        isDragAccept: any,
        isDragReject: any,
        acceptedFiles: any,
    }
}