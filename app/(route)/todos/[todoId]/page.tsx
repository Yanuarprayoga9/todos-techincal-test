"use client";
import { Heading } from "@/components/page-header";
import { TodoItem } from "@/components/todo-item";
import { Separator } from "@/components/ui/separator";
import { UpdateTodoForm } from "@/components/update-todo-form";
import { useGetTodoById } from "@/hooks/todo/use-get-todo";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const { data: todo } = useGetTodoById(params.todoId as string);
  return (
    <div className="w-full">

      <Heading title="Detail todo" description="Make your day beautiful" />
      <Separator className="w-full" />
      {todo ? (
        <div className="flex flex-col justify-center items-center-center py-8 sm:flex-wrap sm:flex-row gap-4">
          <TodoItem todo={todo} />
          <UpdateTodoForm />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Page;
