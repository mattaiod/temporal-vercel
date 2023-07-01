export interface Class<T> extends Function {
  new (...args: any[]): T
}

export type Fn = (...args: any[]) => any
export type Fn1<T> = (...args: any[]) => T
