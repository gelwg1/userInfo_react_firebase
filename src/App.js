import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { db } from './firebase_config';
import TodoItemList from './TodoItemList';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    db.collection('User_info').onSnapshot((snapshot) => {
      setUserList(
        snapshot.docs.map((doc) => ({
          name: doc.data().name,
          age: doc.data().age,
          id: doc.id,
        }))
      );
    });
  }, []);
  const addUser = () => {
    db.collection('User_info').add({
      name: name,
      age: age,
    });
    setName('');
    setAge(0);
  };

  return (
    <div className="App">
      <h1>This is a User's info app</h1>
      <form>
        <TextField
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button variant="outlined" onClick={addUser}>
          Add user
        </Button>
      </form>
      <TodoItemList userList={userList} />
    </div>
  );
};

export default App;
