import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('Learn react'), new Todo('Learn typescript')];

  return (
    <>
      <Todos items={todos}>
        <p>Ini adalah child</p>
      </Todos>
    </>
  );
}

export default App;
