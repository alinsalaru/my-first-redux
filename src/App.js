import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch} from 'react-redux'
import allActions from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const loggedIn  = useSelector(state => state.loggedIn);

  const dispatch = useDispatch();
  const {increment, decrement, logIn} = allActions;

  return (
    <div className="App">
      <div>Counter: {counter}</div>
      <div>Is user logged in? {loggedIn ? 'yes' : 'no'}</div>
      <button onClick={()=> dispatch(increment(5))}>
        Increment
      </button>

      <button onClick={()=> dispatch(decrement(6))}>
        Decrement
      </button>

      <button onClick={()=> dispatch(logIn())}>
        logIn
      </button>
    </div>
  );
}

// store

// actions

// reducer

// dispatch

export default App;
