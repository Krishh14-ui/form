 "use server";

import prisma from "../lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addStudent(formData) {
  const name = formData.get("name");
  const age = Number(formData.get("age"));
  const course = formData.get("course");

  if (!name || !course || !Number.isInteger(age) || age < 1) {
    throw new Error("Please enter valid student details");
  }

  await prisma.student.create({
    data: { name: name.trim(), Age: age, course: course.trim() },
  });

  revalidatePath("/");
  redirect("/?saved=1");
}