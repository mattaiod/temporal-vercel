import { hydrateStrict } from '../utils/object'
import { type BaseModel, _BaseModel } from './_base'
import type { PriorityModel, StatusTaskModel } from './_enum'
import type { TaskDbInterface } from './task_Db'
import type { NotNull } from '~/utils/types'
import { ErrorValueForbidden } from '~/utils/error'
import { isNull } from '~/utils/logic'
import type { Either } from '~/utils/monads'
import { left, right } from '~/utils/monads'

type IdTaskDayPlanning = string & { readonly __tag: unique symbol }

export class TaskDayPlanningModel extends _BaseModel<IdTaskDayPlanning> {
  title!: string
  description!: string
  deadline!: Date
  priority!: PriorityModel
  status!: StatusTaskModel

  protected constructor(obj: BaseModel<TaskDbInterface<NotNull>, IdTaskDayPlanning>) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static make(obj: BaseModel<TaskDbInterface<NotNull>, IdTaskDayPlanning>): Either<ErrorValueForbidden, TaskDayPlanningModel> {
    return isNull(obj.dayPlanning_id)
      ? left(new ErrorValueForbidden('dayPlanning_id must not be null'))
      : right(new this(obj))
  }
}
