import { Todo } from "@/types";
import { TodoItem } from "./todo-item";

const TodoList = ({ todos }: { todos: Todo[] | undefined  }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {todos ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <h1> Tidak Ada Todo</h1>
      )}
    </div>
  );
};

export default TodoList;
