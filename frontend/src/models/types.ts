type Id = number

interface User {
  id: number
  email: string
}

interface Task {
  title: string
  description: string
  deadline: Date
  priority: Priority
  status: StatusTask
}

interface Backlog {
  ListTask: Task[]
}

interface Timebox {
  priority: Priority
  date: Date
  ListSlot: Slot[]
  ListTaskPriority: Task[]
}

interface Slot {
  task: Task
  timeBegin: Date
  timeEnd: Date
}

type Priority = "low" | "medium" | "high"

type StatusTask = "success" | "failed" | "not started"
