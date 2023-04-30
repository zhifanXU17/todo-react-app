import "./App.css";
import { useState } from "react";

import Header from "@/components/header";
import TodoItems from "@/components/TodoItems";
import TodoItem, { TodoItemInterface } from "@/components/TodoItem";

function App() {
  const [todoItems, setTodoItems] = useState<TodoItemInterface[]>(() => {
    if (localStorage.getItem("todoItems")) {
      return JSON.parse(localStorage.getItem("todoItems") || "");
    } else {
      return [];
    }
  });

  const handleSave = (item: TodoItemInterface) => {
    const nextTodoItems = [...todoItems, item];
    setTodoItems(nextTodoItems);
    localStorage.setItem("todoItems", JSON.stringify(nextTodoItems));
  };

  const handleEdit = (item: TodoItemInterface) => {
    const nextTodoItems = [...todoItems];
    const index = nextTodoItems.findIndex((todo) => todo.id === item.id);
    nextTodoItems.splice(index, 1, item);
    setTodoItems(nextTodoItems);
  };

  const handleDelete = (item: TodoItemInterface) => {
    const nextTodoItems = [...todoItems];
    const index = nextTodoItems.findIndex((todo) => todo.id === item.id);
    nextTodoItems.splice(index, 1);
    setTodoItems(nextTodoItems);
    localStorage.setItem("todoItems", JSON.stringify(nextTodoItems));
  };

  return (
    <div className="container h-screen mx-auto max-w-xl">
      <Header />
      <TodoItem handleSave={handleSave} />
      <TodoItems
        todoItems={todoItems}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
