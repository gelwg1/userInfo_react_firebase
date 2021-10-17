import { Button, ListItem, ListItemText } from '@material-ui/core';
import { db } from './firebase_config';

const TodoItemList = ({ userList }) => {
  const increaseAge = (user) => {
    db.collection('User_info')
      .doc(user.id)
      .update({
        age: +user.age + 1,
      });
  };
  const deleteUser = (id) => {
    db.collection('User_info').doc(id).delete();
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {userList.map((user) => (
        <div style={{ display: 'flex' }} key={user.id}>
          <ListItem>
            <ListItemText primary={user.name} secondary={user.age} />
          </ListItem>
          <Button variant="outlined" onClick={() => increaseAge(user)}>
            Increase age
          </Button>
          <Button variant="outlined" onClick={() => deleteUser(user.id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TodoItemList;
