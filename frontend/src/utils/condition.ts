export const ifElse = <T, U>(bool: boolean, trueFn: Fn1<T>, falseFn: Fn1<U>): T | U => {
  if (bool === true)
    return trueFn()
  else return falseFn()
}

export const matchMaybe = <T, U, V>(maybe: Maybe<T>, justFn: Fn1<U>, nothingFn: Fn1<V>): U | V => {
  return ifElse(is(maybe, Just), justFn, nothingFn)
}

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
