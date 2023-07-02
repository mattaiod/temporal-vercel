import { hydrate, hydrateStrict } from '../utils/object'
import { _BaseModel } from './_base'
import type { TaskModel } from './task'

export class BacklogModel extends _BaseModel {
  ListTask!: TaskModel[]

  protected constructor(obj: BacklogModel) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static override make(obj: BacklogModel): BacklogModel {
    return new this(obj)
  }
}
