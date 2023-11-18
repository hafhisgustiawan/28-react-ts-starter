import Todo from '../models/todo';
import classes from './TodoItem.module.css';
import { TrashIcon } from '@heroicons/react/24/outline';

interface TodoItemPropsType {
  // children: React.ReactNode;
  item: Todo;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemPropsType> = ({ item, onDelete }) => {
  return (
    <li className={classes.item}>
      {item?.text}
      <TrashIcon
        onClick={() => onDelete(item.id)}
        style={{
          width: 20,
          cursor: 'pointer',
          marginLeft: 'auto',
        }}
      />
    </li>
  );
};

export default TodoItem;
