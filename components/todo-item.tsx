import { BellRing, Check, MoreHorizontal } from "lucide-react";

import { cn, formattedDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Todo } from "@/types";
import { TodoActions } from "./todo-item-actions";
import { TodoBadge } from "./todo-item-badge";
import { useUpdateTodo } from "@/hooks/todo/use-update-todo";

type TodoItemProps = CardProps & {
  todo: Todo;
};
type CardProps = React.ComponentProps<typeof Card>;

export function TodoItem({ className, todo, ...props }: TodoItemProps) {
  const updateTodo = useUpdateTodo();
  const handleUpdateTodo = () => {
    updateTodo.mutate({ id: todo.id, isCompleted: !todo.isCompleted });
  };
  return (
    <Card
      className={cn("w-full sm:max-w-[380px] cursor-pointer", className)}
      {...props}
      onDoubleClick={() => (window.location.href = `/todos/${todo.id}`)}
    >
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <div className="overflow-hidden">
              <p className="text-3xl ">{todo.name} </p>
              <TodoBadge isCompleted={todo.isCompleted} />
            </div>
            <TodoActions todoId={todo.id} />
          </div>
        </CardTitle>
        <CardDescription>
          {formattedDate(todo.createdAt.toString())}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 mt-[-12px]">
        <div className="flex items-center space-x-4 rounded-md  bg-slate-50 p-2">
          <div className="flex-1 space-y-1 h-8">
            <p className="text-sm font-medium leading-none">{todo.value}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          disabled={updateTodo.isPending}
          onClick={handleUpdateTodo}
        >
          {!todo.isCompleted ? "Mark as complete" : "Mark uncomplete"}
        </Button>
      </CardFooter>
    </Card>
  );
}
