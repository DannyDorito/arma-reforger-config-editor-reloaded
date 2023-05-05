export interface Dictionary<T> {
  [Key: string]: T;
}

export class SearchParameters {
  Find: Dictionary<string> = {};
}
