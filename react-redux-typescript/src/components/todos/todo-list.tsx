import * as React from 'react';
import {connect} from 'react-redux';
import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {AppState} from '../../store';
import {fetchTodos} from '../../store/todos';
import {ITodo, ITodoList} from '../../types';

interface ITodoListStateProps {
    todoList: ITodoList;
}

interface ITodoListDispatchProps {
    fetchTodos: () => any;
}

type TodoListProps = ITodoListDispatchProps & ITodoListStateProps;

class TodoList extends React.Component<TodoListProps> {

    public componentDidMount() {
        this.props.fetchTodos();
    }

    public render() {
        const {todos} = this.props.todoList;

        if (!todos.length) {
            return <p>You have no todos! Add one</p>;
        }

        return (
            <ul>
                {todos.map(this.renderTodo)}
            </ul>
        );
    }

    private renderTodo = (todo: ITodo) => (<li key={todo.id}>{todo.todo}</li>);
}

const mapStateToProps = (state: AppState) => ({
    todoList: state.todos
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, Action>) => ({
   fetchTodos: () => dispatch(fetchTodos())
});

const TodoListConnected = connect<ITodoListStateProps, ITodoListDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(TodoList);

export {TodoList, TodoListConnected};
