import TodoItem from "./TodoItem";
import { TodoElement } from "./TodoList";

interface TodoContainerProps {
  todoList: TodoElement[];
  onClick: (id: string) => void;
  onToggleDone: (id: string) => void;
}

const TodoContainer = ({
  todoList,
  onClick,
  onToggleDone,
}: TodoContainerProps) => {
  return (
    <div>
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onClick={onClick}
            onToggleDone={onToggleDone}
          />
        ))
      ) : (
        <h3 className="text-lg text-center">Empty task!!!</h3>
      )}
    </div>
  );
};

export default TodoContainer;
