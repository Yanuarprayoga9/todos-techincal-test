import { Todo } from "@/types";
import { TodoItem } from "./todo-item";

const TodoList = ({ todos }: { todos: Todo[] | undefined }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {todos && todos?.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <h1> Todo is empty. Please create a new todo</h1>
      )}
    </div>
  );
};

export default TodoList;
