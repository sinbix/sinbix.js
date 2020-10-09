import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalRenderer {
  private readonly _renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this._renderer = this.rendererFactory.createRenderer(null, null);
  }

  get renderer() {
    return this._renderer;
  }
}
