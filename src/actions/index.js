const increment = () => ({type: 'INCREMENT'});
const decrement = () => ({type: 'DECREMENT'});

const logIn = () => ({
    type: 'LOGGED_IN'
});

const allActions = {
    logIn,
    increment,
    decrement,
}

export default allActions;