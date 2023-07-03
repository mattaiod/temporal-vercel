import type { PriorityModel, StatusTaskModel } from "./_enum"
import type { NotNull } from "~/utils/types"

export interface TaskDbInterface<T extends null | NotNull> {
  title: string
  description: string
  deadline: Date
  priority: PriorityModel
  status: StatusTaskModel
  dayPlanning_id: T
}
