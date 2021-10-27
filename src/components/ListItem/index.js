import './index.css';
import { useState } from 'react';
const ListItem = props => {
  const [ done, setDone ] = useState(props.data.completed);

  return (
    <li className="list-item">
      <p>My userID: {props.data.userId}</p>
      <p>Task: {props.data.title}</p>
      <p className={done ? 'done' : 'not-done'}>My Status: {done ? 'Done' : 'Not done'}</p>
    </li>
  );
}

export default ListItem;