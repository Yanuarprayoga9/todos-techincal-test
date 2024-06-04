import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { DeleteModal } from "./modal/delete-modal";
import { useState } from "react";
import { useDeleteTodo } from "@/hooks/todo/use-delete-todo";

interface TodoActionsProps {
  todoId: string;
}

export const TodoActions: React.FC<TodoActionsProps> = ({ todoId }) => {
  const [open, setOpen] = useState<boolean>(false);
  console.log(todoId);
  const { mutate: deleteTodo, isPending } = useDeleteTodo();

  const onDelete = () => {
    deleteTodo(todoId)
    setOpen(false); 
  };
  return (
    <DropdownMenu>
      <DeleteModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={isPending}
      />

      <DropdownMenuTrigger asChild>
        <MoreHorizontal className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/todos/${todoId}`}>update</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild onClick={() => setOpen(true)}>
          <span>delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
