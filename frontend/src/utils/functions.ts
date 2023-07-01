import * as R from "ramda"
import type { Maybe } from "./monads"
import { Either, Just, Left, Nothing, Right, ThrowLeft, ThrowRight } from "./monads"
import type { Class, Fn, Fn1 } from "./types"

/* Boolean */
export const is = <T>(value: any, constructor: Class<T>): value is T => {
  return value.constructor.name === constructor.name
}

export const isGlobal = <T>(value: any, constructor: Class<T>): value is T => {
  return value instanceof constructor
}

export const throwErr = (arg = "err") => {
  throw new Error(arg)
}

/* Monad */

// maybe
export const nothing = (): Nothing => {
  return new Nothing()
}

export const just = <T>(val: T): Just<T> => {
  return new Just(val)
}
// either
export const right = <T>(val: T): Right<T> => {
  return new Right(val)
}

export const left = <T>(val: T): Left<T> => {
  return new Left(val)
}

// thrower
const throwLeft = <T>(val: T): ThrowLeft<T> => {
  throw new ThrowLeft(val)
}

const throwRight = <T>(val: T): ThrowRight<T> => {
  throw new ThrowRight(val)
}

// LOGIC
// write a function if true then return false, if false then return true
export const not = (bool: boolean): boolean => !bool

export const ifElse = <T, U>(bool: boolean, trueFn: Fn1<T>, falseFn: Fn1<U>): T | U => {
  if (bool === true)
    return trueFn()
  else return falseFn()
}

export const matchMaybe = <T, U, V>(maybe: Maybe<T>, justFn: Fn1<U>, nothingFn: Fn1<V>): U | V => {
  return ifElse(is(maybe, Just), justFn, nothingFn)
}

/* instance */

// if (is(maybe, Just))
//   return justFn(maybe.from())
// else return nothingFn()
// }

// export const matchMaybe = <T, U>(maybe: Maybe, justFn: Fn(T, U), nothingFn: () => U): U => {
//   if (is(maybe, Just)) return justFn(maybe.from())
//   else return nothingFn()
// }

// export const matchEither = <T, U>(either: Either<T, U>, rightFn: (val: T) => U, leftFn: (val: T) => U): U => {
//   if (is<Right<T>>(Either, Right)) return rightFn(either.from())
//   else return leftFn(either.from())
// }

