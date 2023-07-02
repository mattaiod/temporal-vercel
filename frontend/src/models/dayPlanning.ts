import { hydrateStrict } from '../utils/object'
import { _BaseModel } from './_base'
import type { SlotModel } from './slot'
import type { TaskModel } from './task'

export class DayPlanningModel extends _BaseModel {
  date!: Date
  // join
  ListSlot!: SlotModel[]
  // join
  ListTaskPriorityMax3!: ArrayMax3<TaskModel>

  protected constructor(obj: DayPlanningModel) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static override make(obj: DayPlanningModel): DayPlanningModel {
    return new this(obj)
  }
}

