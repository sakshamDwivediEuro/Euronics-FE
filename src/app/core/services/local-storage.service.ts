import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  // Set item in local storage
  set<T>(key: string, value: T, expireInMinutes?: number): void {
    const item: { value: T; expiry?: number } = { value };

    if (expireInMinutes) {
      const now = new Date().getTime();
      item.expiry = now + expireInMinutes * 60 * 1000;
    }

    localStorage.setItem(key, JSON.stringify(item));
  }

  // Get item from local storage
  get<T>(key: string): T | null {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    try {
      const item = JSON.parse(itemStr) as { value: T; expiry?: number };

      // Check for expiry
      if (item.expiry && new Date().getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }

      return item.value;
    } catch (error) {
      console.error(`Error parsing localStorage item ${key}:`, error);
      return null;
    }
  }

  // Remove item
  remove(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all localStorage
  clear(): void {
    localStorage.clear();
  }

  // Check if key exists
  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
