import FilterTask from "./FilterTask";
import TodoItem from "./TodoItem";
import { TodoElement } from "./TodoList";
import TotalTask from "./TotalTask";

interface TodoContainerProps {
  todoList: TodoElement[];
  totalTask: number;
  completedTask: number;
  onDelete: (id: string) => void;
  onToggleDone: (id: string) => void;
  onUpdate: (id: string, title: string, description: string) => void;
  onFilter: () => void;
}

const TodoContainer = ({
  todoList,
  totalTask,
  completedTask,
  onDelete,
  onToggleDone,
  onUpdate,
  onFilter,
}: TodoContainerProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <FilterTask onFilter={onFilter} />
        <TotalTask totalTask={totalTask} completedTask={completedTask} />
      </div>
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onDelete={onDelete}
            onToggleDone={onToggleDone}
            onUpdate={onUpdate}
          />
        ))
      ) : (
        <h3 className="text-lg text-center">Empty task!!!</h3>
      )}
    </div>
  );
};

export default TodoContainer;
