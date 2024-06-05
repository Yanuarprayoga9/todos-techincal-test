import { baseUrl } from "@/lib/baseUrl";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const URL = `${baseUrl}`;

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body:any) => {
      const { id, ...updateData } = body;
      const todoResponse = await fetch(`${URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!todoResponse.ok) {
        throw new Error("Failed to update todo");
      }

      return todoResponse.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`todos`] });
      queryClient.invalidateQueries({ queryKey: [`todo`] });

    },
  });
};
