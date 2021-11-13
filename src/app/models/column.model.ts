export class Column {
    constructor(public name: string, public tasks: TaskItem[]) {}
}

export class TaskItem {
  id: string;
  description:string;
  status:string;
}
