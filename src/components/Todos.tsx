import { Fragment, useContext } from 'react';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

interface Props {
  // children: React.ReactNode;
  // items: Todo[];
  // onDelete: (id: string) => void;
}

const Todos: React.FC<Props> = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <Fragment>
      <ul className={classes.todos}>
        {todosCtx.items?.map((item) => (
          <TodoItem key={item.id} item={item} onDelete={todosCtx.removeTodo} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Todos;
