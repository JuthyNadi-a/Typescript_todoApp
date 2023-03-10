import React, { useRef } from 'react';

type NewTodoProps = {
    onAddTodo : (todoText: string) => void;
}
const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText= textInputRef.current!.value;
        props.onAddTodo(enteredText)
        textInputRef.current!.value= '';
    }
    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo List</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;