const storage = require('electron-json-storage');

export default {
    KEYS: {
        EXAMPLE: 'example_storage_group',
    },
    setDefaultPath: (path: string) => {
        storage.setDataPath(path);
    },
    get: async (key: string) => {
        return new Promise((resolve, reject) => {
            storage.get(key, (error: Error, data: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        })
    },
    save: (key: string, value: any) => {
        return new Promise((resolve, reject) => {
            storage.set(key, value, (error: Error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(undefined);
                }
            });
        })
    },
}
