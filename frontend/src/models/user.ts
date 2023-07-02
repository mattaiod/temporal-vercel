import { hydrateStrict } from '../utils/object'
import { _BaseModel } from './_base'

export class UserModel extends _BaseModel {
  email!: string

  protected constructor(obj: UserModel) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static override make(obj: UserModel): UserModel {
    return new this(obj)
  }
}

