"use client";
import { TodoItem } from "@/components/todo-item";
import { UpdateTodoForm } from "@/components/update-todo-form";
import { useGetTodoById } from "@/hooks/todo/use-get-todo";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const { data: todo } = useGetTodoById(params.todoId as string);
  return (
    <div className="w-full">
      {todo ? (
        <div className="flex flex-col justify-center items-center-center sm:flex-wrap sm:flex-row gap-4">
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
