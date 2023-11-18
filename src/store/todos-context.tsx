import { createContext, useState } from 'react';
import Todo from '../models/todo';

//disini bisa pake type juga
interface TodoCtxType {
  items: Todo[];
  addTodo: (param: string | undefined) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = createContext<TodoCtxType>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

interface PropsType {
  children: React.ReactNode;
}

const TodosContextProvider = (props: PropsType) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string | undefined) => {
    setTodos((prev) => [...prev, new Todo(todoText || '')]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((el: Todo) => el.id !== id));
  };

  const contextValue: TodoCtxType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props?.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
