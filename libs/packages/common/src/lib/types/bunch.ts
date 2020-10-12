export type Bunch<T> = T | T[];

export interface BunchCallback<T> {
  (bunchEntity: T): any;
}
