import { useState } from "react";
import SearchBar from "./SearchBar";
import TodoContainer from "./TodoContainer";

export interface TodoElement {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoElement[]>([]);
  const [showUncompletedOnly, setShowUncompletedOnly] = useState(false);

  const handleDelete = (id: string) => {
    return setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleToggle = (id: string) => {
    return setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleAddTodo = (title: string) => {
    const newTodo: TodoElement = {
      id: Date.now().toString(),
      title: title,
      description: "Click here to edit",
      isDone: false,
    };

    const newArray: TodoElement[] = [newTodo, ...todoList];

    setTodoList(newArray);
  };

  const handleUpdate = (id: string, title: string, description: string) => {
    const newArray: TodoElement[] = [...todoList];
    const currentItemIndex: number = newArray.findIndex(
      (todo) => todo.id === id
    );

    newArray[currentItemIndex] = {
      ...newArray[currentItemIndex],
      title,
      description,
    };

    setTodoList(newArray);
  };
  /* Home work */
  const unCompletedTasks = [...todoList].filter((todo) => !todo.isDone);

  const handleFilter = () => {
    setShowUncompletedOnly(!showUncompletedOnly);
  };

  const totalTask = todoList.length;
  const completedTask = [...todoList].reduce(
    (acc, todo) => (acc += todo.isDone ? 1 : 0),
    0
  );

  /* Home work */

  const sortTodoList = (list: TodoElement[]) => {
    return [...list].sort((a, b) => Number(a.isDone) - Number(b.isDone));
  };

  return (
    <div className="shadow w-1/2 h-1/2 p-5">
      <h1 className="text-lg font-bold">TO-DO LIST</h1>
      <SearchBar onAddTodo={handleAddTodo} />
      <TodoContainer
        todoList={sortTodoList(
          showUncompletedOnly ? unCompletedTasks : todoList
        )}
        onDelete={handleDelete}
        onToggleDone={handleToggle}
        onUpdate={handleUpdate}
        onFilter={handleFilter}
        totalTask={totalTask}
        completedTask={completedTask}
      />
    </div>
  );
};

export default TodoList;
