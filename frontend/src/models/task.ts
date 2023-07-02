import { hydrateStrict } from '../utils/object'
import { _BaseModel } from './_base'
import type { PriorityModel, StatusTaskModel } from './_enum'

export class TaskModel extends _BaseModel {
  title!: string
  description!: string
  deadline!: Date
  priority!: PriorityModel
  status!: StatusTaskModel

  protected constructor(obj: TaskModel) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static override make(obj: TaskModel): TaskModel {
    return new this(obj)
  }
}
