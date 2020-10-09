export type TScreenOrientation = 'portrait' | 'landscape';

export interface IScreen {
  width: number;
  height: number;
  orientation: TScreenOrientation;
}
