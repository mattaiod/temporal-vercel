import { is, isGlobal, left, not, right, throwErr } from "./functions"
import type { Class } from "./types"

/* Maybe */
export class Nothing {
  constructor() {}
}

export class Just<T> {
  constructor(private value: T) {}

  from(): T {
    return this.value
  }
}

export type Maybe<T> = Nothing | Just<T>

/* Either */
abstract class EitherClass<T> {
  constructor(private value: T) {}

  from(): T {
    return this.value
  }
}

export class Left<T> extends EitherClass<T> {
  constructor(value: T) {
    super(value)
  }
}

export class Right<T> extends EitherClass<T> {
  constructor(value: T) {
    super(value)
  }
}

export type Either<L, R> = Left<L> | Right<R>

// thrower
abstract class ThrowerClass<T> {
  constructor(private value: T) {}

  from(): T {
    return this.value
  }
}

export class ThrowLeft<T> extends ThrowerClass<T> {
  constructor(value: T) {
    super(value)
  }
}

export class ThrowRight<T> extends ThrowerClass<T> {
  constructor(value: T) {
    super(value)
  }
}

export type Thrower<L, R> = ThrowLeft<L> | ThrowRight<R> | R

export const catchThrower = <L, R>(fn: () => Thrower<L, R>): Either<L, R> => {
  try {
    const res = fn()
    if (isGlobal(res, ThrowerClass)) {
      if (is(res, ThrowRight))
        return right(res.from())
      else return throwErr("missing throw in throwLeft")
    }
    else {
      return right(res)
    }
  }
  catch (e: any) {
    if (is(e, ThrowLeft))
      return left(e.from())
    else throw e
  }
}
