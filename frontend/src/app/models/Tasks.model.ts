export class Task {
  _id: string;
  name: string;
  description: string;
  boardId: string;
  created_date: Date;
  logs: Object;
  completed: Boolean;
  status: string;
}