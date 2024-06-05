import { baseUrl } from "@/lib/baseUrl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const URL = baseUrl; 

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: Record<string, any>) => {
      const res = await fetch(URL, {
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      const notify = () => toast.success("Todo susscesfully created.");
      notify();
    },
  });
};
