export interface IStorage {
  clear(): Promise<void>;

  getItem(key: string): Promise<string>;

  key(index: number): Promise<string>;

  removeItem(key: string): Promise<void>;

  setItem(key: string, value: string): Promise<void>;

  getLength(): Promise<number>;
}

export class AStorageService implements IStorage {
  private storage: IStorage;

  constructor(storage: IStorage) {
    this.storage = storage;
  }

  async clear(): Promise<void> {
    this.storage.clear();
  }

  async getItem(key: string): Promise<string> {
    return this.storage.getItem(key);
  }

  async key(index: number): Promise<string> {
    return this.storage.key(index);
  }

  async removeItem(key: string): Promise<void> {
    this.storage.removeItem(key);
  }

  async setItem(key: string, value: string): Promise<void> {
    this.storage.setItem(key, value);
  }

  async getLength(): Promise<number> {
    return this.storage.getLength();
  }
}
