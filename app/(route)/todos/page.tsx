"use client";
import { CreateTodoModal } from "@/components/modal/create-todo";
import { Heading } from "@/components/page-header";
import { SearchTodo } from "@/components/search-todo";
import TodoList from "@/components/todo-list";
import { Separator } from "@/components/ui/separator";
import { useGetTodos } from "@/hooks/todo/use-get-todos";
import { UseDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const debouncedSearch = UseDebounce(search)
  const { data: todos, error, isLoading, refetch:refetchTodos } = useGetTodos({search:debouncedSearch});
  useEffect(() => {
    refetchTodos();
  }, [debouncedSearch,refetchTodos])
  if (error) return <div>Error loading todos</div>;

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="todos" description="Make your day beautiful" />
        <CreateTodoModal />
      </div>
      <Separator className="w-full" />
      
      <SearchTodo search={search} setSearch={setSearch}/>
      {isLoading ? <div>Loading...</div> : <TodoList todos={todos} />}
    </>
  );
}
