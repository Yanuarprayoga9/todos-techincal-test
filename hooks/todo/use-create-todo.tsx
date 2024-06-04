import { Todo } from "@/types";
import { useMutation } from "@tanstack/react-query";

type OnSuccessFn = (data: Todo) => void;

export const useCreateTodo = ({ onSuccess }: { onSuccess: OnSuccessFn }) => {
  return useMutation({
    mutationFn: async (body: Todo): Promise<Todo> => {
      const res = await fetch(`${URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error("Failed to create todo");
      }

      return res.json();
    },
    onSuccess,
  });
};
