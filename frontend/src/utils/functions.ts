/* Boolean */
export const is = <T>(value: unknown, constructor: Class): value is T => {
  return value instanceof constructor
}

export const throwErr = (arg = "err") => {
  throw new Error(arg)
}

/* Monad */

export const nothing = (): Nothing => {
  return new Nothing()
}

export const just = <T>(val: T): Just<T> => {
  return new Just(val)
}

export const right = <T>(val: T): Right<T> => {
  return new Right(val)
}

export const left = <T>(val: T): Left<T> => {
  return new Left(val)
}

/* instance */
const matchMaybe = <T, U>(maybe: Maybe, justFn: (val: T) => U, nothingFn: () => U): U => {
  if (is<Just<T>>(maybe, Just)) return justFn(maybe.from())
  else return nothingFn()
}

const matchEither = <T, U>(either: Either<T>, rightFn: (val: T) => U, leftFn: (val: T) => U): U => {
  if (is<Right<T>>(Either, Right)) return rightFn(either.from())
  else return leftFn(either.from())
}
