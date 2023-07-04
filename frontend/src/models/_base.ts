import { hydrate } from '../utils/object'
import type { UserModel } from './user'

export class _BaseModel {
  id!: Id
  createdAt!: Date
  updatedAt!: Date
  created_by!: UserModel

  protected constructor(obj: _BaseModel) {
    hydrate(this, obj)
  }

  static make(obj: _BaseModel): _BaseModel {
    return new this(obj)
  }
}

export type Id = number & { readonly __tag: unique symbol }

