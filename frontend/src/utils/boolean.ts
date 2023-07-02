export const is = <T>(value: any, constructor: Class<T>): value is T => {
  return value.constructor.name === constructor.name
}

export const isGlobal = <T>(value: any, constructor: Class<T>): value is T => {
  return value instanceof constructor
}
