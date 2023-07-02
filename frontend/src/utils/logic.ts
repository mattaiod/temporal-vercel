export const not = (bool: boolean): boolean => !bool
export const isUndefined = (val: any): val is undefined => val === undefined
export const isNull = (val: any): val is null => val === null
export const isNotNull = (val: any): val is null => val !== null

