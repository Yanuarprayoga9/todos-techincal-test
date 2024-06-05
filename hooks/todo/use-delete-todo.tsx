import { baseUrl } from "@/lib/baseUrl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const URL = `${baseUrl}/`; 

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string): Promise<{ id: string }> => {
      const res = await fetch(`${URL}${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete todo");
      }
      return { id };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      const notify = () => toast.success("Todo susscesfully deleted.");
      notify();
    },
  });
};
