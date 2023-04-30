import { FormEvent, useRef, useState } from "react";
import * as dayjs from "dayjs";

export interface TodoItemInterface {
  id: string | undefined;
  timestamp: string | undefined;
  content: string;
  isFinished: boolean;
}

interface TodoItemProps {
  handleSave: (item: TodoItemInterface) => void;
}

const TodoItem = ({ handleSave }: TodoItemProps) => {
  const [todoItem, setTodoItem] = useState<TodoItemInterface>({
    id: undefined,
    timestamp: undefined,
    content: "",
    isFinished: false,
  });
  const todoRefInput = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (todoItem.content === "") {
      todoRefInput?.current?.classList.add("animate-input-error");
      todoRefInput?.current?.classList.add("input-error");
      setTimeout(() => {
        todoRefInput?.current?.classList.remove("animate-input-error");
        todoRefInput?.current?.classList.remove("input-error");
      }, 1000);
    } else {
      todoItem.id = crypto.randomUUID();
      todoItem.timestamp = dayjs().format("YYYY/MM/DD ddd");
      handleSave({ ...todoItem });

      todoItem.id = undefined;
      todoItem.content = "";
      todoItem.timestamp = undefined;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2">
      <input
        type="text"
        ref={todoRefInput}
        placeholder="Type here..."
        className="input input-bordered w-full"
        value={todoItem.content}
        onChange={(e) => setTodoItem({ ...todoItem, content: e.target.value })}
      />
    </form>
  );
};

export default TodoItem;
