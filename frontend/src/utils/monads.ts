/* Thrower */

class ThrowClass<T> {
  constructor(private value: T) {}

  static of<T>(value: T): ThrowClass<T> {
    return new ThrowClass(value)
  }

  from(): T {
    return this.value
  }
}

/* Maybe */
class Maybe {
  constructor() {}
}

class Nothing extends Maybe {
  constructor() {
    super()
  }
}

class Just<T> extends Maybe {
  constructor(private value: T) {
    super()
  }

  from(): T {
    return this.value
  }
}

/* Either */

class Either<T> {
  constructor(private value: T) {}

  from(): T {
    return this.value
  }
}

class Left<T> extends Either<T> {
  constructor(value: T) {
    super(value)
  }
}

class Right<T> extends Either<T> {
  constructor(value: T) {
    super(value)
  }
}

const failFast = <T>(val: T): ThrowClass<T> => {
  throw val
}
