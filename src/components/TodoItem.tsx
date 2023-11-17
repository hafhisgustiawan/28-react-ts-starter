import Todo from '../models/todo';

interface TodoItemPropsType {
  children: React.ReactNode;
  item: Todo;
}

const TodoItem: React.FC<TodoItemPropsType> = ({ item }) => {
  return <li>{item?.text}</li>;
};

export default TodoItem;
