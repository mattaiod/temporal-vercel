import { hydrateStrict } from '../utils/object'
import { _BaseModel } from './_base'
import type { TaskModel } from './task'

export class SlotModel extends _BaseModel {
  task!: TaskModel
  timeBegin!: Date
  timeEnd!: Date

  protected constructor(obj: SlotModel) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static override make(obj: SlotModel): SlotModel {
    return new this(obj)
  }
}
