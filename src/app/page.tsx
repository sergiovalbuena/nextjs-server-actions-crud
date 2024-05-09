import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";
import clsx from "clsx";
import { PencilIcon, TrashIcon } from "lucide-react";
import { TaskCard } from "@/components/taskCard";

async function HomePage() {
  const tasks = await prisma.task.findMany();
  console.log(tasks);

  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default HomePage;
