import { Fragment } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

interface Props {
  children: React.ReactNode;
  items: Todo[];
}

const Todos: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <ul>
        {props.items?.map((item) => (
          <TodoItem key={item.id} item={item}>
            {item.text}
          </TodoItem>
        ))}
      </ul>
    </Fragment>
  );
};

export default Todos;
