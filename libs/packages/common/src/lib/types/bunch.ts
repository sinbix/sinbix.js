export type TBunch<T> = T | T[];

export interface IBunchCallback<T> {
  (bunchEntity: T): any;
}
