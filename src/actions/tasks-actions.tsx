"use server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

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
