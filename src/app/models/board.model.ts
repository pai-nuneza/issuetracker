
export class Board {
  name: string
  columns: Column[]
}

export class Column {
  columnId: number;
  name: string;
  tasks: TaskItem[];
}

export class TaskItem {
  id: string;
  description: string;
  status?: string;
  priority?: string;
  assignedTo?: string;
  dateCreated?: string;
}
