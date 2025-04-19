import { useState } from "react";
import SearchBar from "./SearchBar";
import TodoContainer from "./ToDoContainer";

export interface TodoElement {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoElement[]>([
    {
      id: "1",
      title: "Item 1",
      description: "Due on 30-4-1975",
      isDone: false,
    },
    {
      id: "2",
      title: "Item 2",
      description: "Due on 30-4-1975",
      isDone: false,
    },
    {
      id: "3",
      title: "Item 3",
      description: "Due on 30-4-1975",
      isDone: false,
    },
  ]);

  const handleClick = (id: string) => {
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

  return (
    <div className="shadow w-1/2 h-1/2 p-5">
      <h1 className="text-lg font-bold">TO-DO LIST</h1>
      <SearchBar />
      <TodoContainer
        todoList={todoList}
        onClick={handleClick}
        onToggleDone={handleToggle}
      />
    </div>
  );
};

export default TodoList;
