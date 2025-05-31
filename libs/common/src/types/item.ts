export interface ItemBase {
  id: number;
  name: string;
  active?: boolean;
  deleted?: boolean;
  created?: string;
  updated?: string;
}

export interface ItemBaseLocales<T> {
  locale: {
    [k: string]: T;
  };
}
