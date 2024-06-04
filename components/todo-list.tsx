import { TodoItem } from "./todo-item"

const TodoList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  )
}

export default TodoList