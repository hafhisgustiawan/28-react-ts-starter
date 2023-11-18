import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string | undefined) => {
  //   setTodos((prev) => [...prev, new Todo(todoText || '')]);
  // };

  // const deleteTodoHandler = (id: string) => {
  //   setTodos((prev) => prev.filter((el: Todo) => el.id !== id));
  // };

  return (
    <TodosContextProvider>
      <div>
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
