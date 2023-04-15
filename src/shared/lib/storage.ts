class LocalStorage {
    private storage;
    constructor() {
        this.storage = window.localStorage;
    }
    set(key: string, value: string) {
        this.storage.setItem(key, value);
    }
    get(key: string): string | null {
        return this.storage.getItem(key);
    }
}

const localStorage = new LocalStorage();

export default localStorage;