"use client";
import { CreateTodoModal } from "@/components/modal/create-todo";
import { Heading } from "@/components/page-header";
import TodoList from "@/components/todo-list";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { useGetTodos } from "@/hooks/todo/use-get-todos";
import { Plus } from "lucide-react";

export default function Home() {
  const { data: todos, error, isLoading } = useGetTodos({});

  if (error) return <div>Error loading todos</div>;

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="todos" description="Make your day beautiful" />
        <CreateTodoModal />
      </div>
      <Separator className="w-full" />
      {isLoading && <div>Loading...</div>}
      <TodoList todos={todos} />
    </>
  );
}
