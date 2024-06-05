"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useUpdateTodo } from "@/hooks/todo/use-update-todo";
import { useParams } from "next/navigation";
import { useGetTodoById } from "@/hooks/todo/use-get-todo";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(30, {
      message: "name max 15 characters.",
    }),
  value: z
    .string()
    .min(2, {
      message: "value must be at least 2 characters.",
    })
    .max(50, {
      message: "value max 15 characters.",
    }),
});

export function UpdateTodoForm() {
  const { todoId } = useParams();
  const { data: todo } = useGetTodoById(todoId as string);
  const updateTodo = useUpdateTodo();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: todo?.name,
      value: todo?.value,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const validatedFields = formSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }
    if (!todo?.id) {
      return { error: "Invalid fields!" };
    }
    updateTodo.mutate({ id: todo.id, name: values.name, value: values.value });
  }
  return (
    <div className="border rounded-md p-4">
      <h1 className="text-center p-2 font-bold text-2xl">update todo</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>value</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your value here."
                    id="message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="mt-4 w-full"
            disabled={updateTodo.isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
