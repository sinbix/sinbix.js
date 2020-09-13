import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LocalStorage } from './local-storage';
import { AStorageService } from '../storage.model';
import { MemoryStorageService } from '../memory-storage';

@Injectable({ providedIn: 'root' })
export class LocalStorageService extends AStorageService {
  constructor(
    private memoryStorageService: MemoryStorageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    super(
      isPlatformBrowser(platformId) ? new LocalStorage() : memoryStorageService
    );
  }
}
