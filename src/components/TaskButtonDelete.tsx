import { Button } from "./ui/button";
import { deleteTask } from "@/actions/tasks-actions";

export function TaskButtonDelete({ taskId }: { taskId: number }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <Button>Delete</Button>
    </form>
  );
}
