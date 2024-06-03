"use client"
import { useGetTodos } from "@/hooks/todo/use-get-todos";

export default function Home() {
  const { data: todos, error, isLoading } = useGetTodos({ search: "minum"});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todos</div>;

  return (
    <div>
      {todos?.map(todo => (
        <div key={todo.id}>
          <h3>{todo.name}</h3>
          <p>{todo.value}</p>
        </div>
      ))}
    </div>
  );
}
