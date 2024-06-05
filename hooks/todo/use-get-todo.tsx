import { Todo } from "@/types";
import { useQuery } from "@tanstack/react-query";

const fetchTodoById = async (id: string): Promise<Todo> => {
  const res = await fetch(`/api/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch todo");
  }

  return res.json();
};

const useGetTodoById = (id: string) => {
  return useQuery({
    queryKey: ["todo", id],
    queryFn: () => fetchTodoById(id),
  });
};

export { fetchTodoById, useGetTodoById };
