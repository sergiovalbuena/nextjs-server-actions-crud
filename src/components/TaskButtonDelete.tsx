import { Button } from "./ui/button";

export function TaskButtonDelete({ taskId }: { taskId: number }) {
  async function deleteTask(formData: FormData) {
    "use server";
    const tasksId = formData.get("taskId")?.toString();
    console.log(tasksId);
  }

  return (
    <form action={deleteTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <Button>Delete</Button>
    </form>
  );
}
