"use server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ChevronsLeftRight } from "lucide-react";

export async function createTask(formData: FormData) {
  const name = formData.get("taskName")?.toString();
  const framework = formData.get("framework")?.toString();
  const switchValue = formData.get("switch");
  const paymentMethod = formData.get("paymenthMethod")?.toString();

  //console.log({ switchValue, paymentMethod, name, framework });

  if (!name || !framework || !paymentMethod) {
    return;
  }

  const newTask = await prisma.task.create({
    data: {
      name: name,
      framework: framework,
      //switchValue: switchValue,
      paymentMethod: paymentMethod,
    },
  });

  console.log(newTask);
  redirect("/");
}

export async function deleteTask(formData: FormData) {
  "use server";
  const taskId = formData.get("taskId")?.toString();
  //console.log(taskId);

  if (!taskId) {
    return;
  }
  await prisma.task.delete({
    where: {
      id: parseInt(taskId),
    },
  });

  revalidatePath("/");
}

export async function updateTask(formData: FormData) {
  const id = formData.get("id")?.toString();
  const name = formData.get("taskName")?.toString();
  const framework = formData.get("framework")?.toString();
  const paymentMethod = formData.get("paymenthMethod")?.toString();

  //console.log({ id, name, framework, paymentMethod });

  if (!id || !name || !framework || !paymentMethod) {
    return;
  }

  await prisma.task.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: name,
      framework: framework,
      paymentMethod: paymentMethod,
    },
  });

  redirect("/");
}
