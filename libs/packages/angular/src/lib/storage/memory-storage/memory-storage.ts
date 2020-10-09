import { IStorage } from '../storage.model';

export class MemoryStorage implements IStorage {
  /**
   * Storage data
   */
  private data: { [key: string]: string } = {};

  async clear(): Promise<void> {
    this.data = {};
  }

  async getItem(key: string): Promise<string> {
    return key in this.data ? this.data[key] : null;
  }

  async key(index: number): Promise<string> {
    const keys = Object.keys(this.data);

    return index >= 0 && keys.length < index ? keys[index] : null;
  }

  async removeItem(key: string): Promise<void> {
    delete this.data[key];
  }

  async setItem(key: string, value: string): Promise<void> {
    this.data[key] = value;
  }

  async getLength(): Promise<number> {
    return Object.keys(this.data).length;
  }
}
