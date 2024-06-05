"use client"
import { TodoItem } from "@/components/todo-item";
import { useGetTodoById } from "@/hooks/todo/use-get-todo";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params= useParams();
  const {data:todo} = useGetTodoById(params.todoId as string);
  return (
  <div>
    {
      todo && <TodoItem todo={todo}/>
    }
  </div>
  )
};

export default Page;
