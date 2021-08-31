function App(){
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            inCompleted: false,
        },
        {
            text: 'meet friend for lunch',
            inCompleted: false,
        },
        {
            text: 'build todo app',
            inCompleted: false,
        },
        {
            text: 'meet with financial advisor',
            inCompleted: false,
        },
        {
            text: 'complete MIT xPro course',
            inCompleted: false,
        }
    ]);
        const addTodo = text => {
            const newTodos = [... todos, {text:text, isComplete:false}];
            setTodos(newTodos); 
        }
    
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
    return (
        <div className="app">
            <div className ="todo-list">    
                {todos.map((todo,i) => 
                    <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)