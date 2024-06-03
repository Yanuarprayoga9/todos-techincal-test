import { baseUrl } from "@/lib/baseUrl";
import { useMutation } from "@tanstack/react-query";

const URL = `${baseUrl}`; // Adjust the URL as needed

type OnSuccessFn = (data: { id: string }) => void;

export const useDeleteTodo = ({ onSuccess }: { onSuccess: OnSuccessFn }) => {
  return useMutation({
    mutationFn: async (id: string): Promise<{ id: string }> => {
      const res = await fetch(`${URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete todo");
      }

      return { id };
    },
    onSuccess,
  });
};
