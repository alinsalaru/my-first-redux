const increment = (payload) => ({type: 'INCREMENT', payload: payload });
const decrement = (number) => ({type: 'DECREMENT', payload: number});

const logIn = () => ({
    type: 'LOGGED_IN'
});

const allActions = {
    logIn,
    increment,
    decrement,
}

export default allActions;