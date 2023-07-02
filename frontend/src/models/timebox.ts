import { hydrateStrict } from '../utils/object'
import { _BaseModel } from './_base'
import type { SlotModel } from './slot'
import type { TaskModel } from './task'

export class TimeboxModel extends _BaseModel {
  date!: Date
  ListSlot!: SlotModel[]
  ListTaskPriorityMax3!: ArrayMax3<TaskModel>

  protected constructor(obj: TimeboxModel) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static override make(obj: TimeboxModel): TimeboxModel {
    return new this(obj)
  }
}

