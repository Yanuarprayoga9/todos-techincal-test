import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) => {
      const { id, ...updateData } = body;
      const todoResponse = await fetch(`/api/${id}`, {
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
      const notify = () => toast.success("Todo susscesfully updated.");
      notify();
    },
  });
};
