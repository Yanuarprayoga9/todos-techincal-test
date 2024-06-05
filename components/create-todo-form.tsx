"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useCreateTodo } from "@/hooks/todo/use-create-todo";

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

export function CreateTodoForm() {
  const createTodo = useCreateTodo();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      value: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const validatedFields = formSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }
    createTodo.mutate(values);
  }
  
  return (
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
          disabled={createTodo.isPending}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
