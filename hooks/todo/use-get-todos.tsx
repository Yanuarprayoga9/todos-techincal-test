import { baseUrl } from "@/lib/baseUrl";
import { Todo } from "@/types";
import { useQuery } from "@tanstack/react-query";
import qs from "query-string";

const URL = `${baseUrl}/`;

interface Query {
  search?: string;
}

const fetchTodos = async (query: Query): Promise<Todo[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      search: query.search || undefined,
    },
  });

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
};

const useGetTodos = (query: Query) => {
  return useQuery({
    queryKey: ["todos", query.search],
    queryFn: () => fetchTodos(query),
    staleTime: 1000 * 60 * 1, // 1 minute,
    refetchInterval: 1000 * 60 * 30,
  });
};

export { fetchTodos, useGetTodos };
