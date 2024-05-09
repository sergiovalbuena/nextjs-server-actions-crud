import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { PencilIcon, TrashIcon } from "lucide-react";
import { Task } from "@prisma/client";

export function TaskCard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader className="felx flex-row justify-between">
        <CardTitle>{task.name}</CardTitle>
        <Badge
          className={clsx({
            "bg-blue-500": task.framework === "sveltekit",
            "bg-red-500": task.framework === "astro",
            "bg-green-500": task.framework === "nuxtjs",
            "bg-yellow-500": task.framework === "nextjs",
          })}
        >
          {task.framework}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.framework}</p>
        <span>{new Date(task.createdAt).toLocaleDateString()}</span>
      </CardContent>
      <CardFooter>
        <Button variant="destructive">
          <TrashIcon />
        </Button>
        <Button variant="outline">
          <PencilIcon />
        </Button>
      </CardFooter>
    </Card>
  );
}
