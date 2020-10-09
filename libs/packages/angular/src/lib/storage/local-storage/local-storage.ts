import { Storage as StorageCap } from '@capacitor/core';
import { IStorage } from '../storage.model';

export class LocalStorage implements IStorage {
  async clear(): Promise<void> {
    await StorageCap.clear();
  }
  async getItem(key: string): Promise<string> {
    return (await StorageCap.get({ key }))?.value;
  }
  async key(index: number): Promise<string> {
    const keys = (await StorageCap.keys())?.keys ?? [];
    return index >= 0 && keys.length < index ? keys[index] : null;
  }
  async removeItem(key: string): Promise<void> {
    await StorageCap.remove({ key });
  }
  async setItem(key: string, value: string): Promise<void> {
    await StorageCap.set({ key, value });
  }
  async getLength(): Promise<number> {
    return (await StorageCap.keys())?.keys?.length ?? 0;
  }
}
