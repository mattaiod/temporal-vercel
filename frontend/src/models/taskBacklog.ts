import { hydrateStrict } from '../utils/object'
import { type BaseModel, _BaseModel } from './_base'
import type { PriorityModel, StatusTaskModel } from './_enum'
import type { TaskDbInterface } from './task_Db'
import { isNotNull } from '~/utils/logic'
import { ErrorValueForbidden } from '~/utils/error'
import { type Either, left, right } from '~/utils/monads'

type IdTaskBacklog = string & { readonly __tag: unique symbol }

export class TaskBacklogModel extends _BaseModel<IdTaskBacklog> {
  title!: string
  description!: string
  deadline!: Date
  priority!: PriorityModel
  status!: StatusTaskModel

  protected constructor(obj: BaseModel<TaskDbInterface<null>, IdTaskBacklog>) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static make(obj: BaseModel<TaskDbInterface<null>, IdTaskBacklog>): Either<ErrorValueForbidden, TaskBacklogModel> {
    return isNotNull(obj.dayPlanning_id)
      ? left(new ErrorValueForbidden('dayPlanning_id must be null'))
      : right(new this(obj))
  }
}
