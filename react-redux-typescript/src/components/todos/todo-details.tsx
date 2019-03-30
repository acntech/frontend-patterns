import * as React from 'react';
import {connect} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router-dom';

import {AppState} from '../../store';
import {ITodo, ITodoList} from '../../types';

interface ITodoDetailsStoreProps {
    todoList: ITodoList;
}

class TodoDetails extends React.Component<ITodoDetailsStoreProps & RouteComponentProps<{id: string}>> {

    public render() {
        return (
            <div>
                {this.todoFromId()}
                <Link to="/">Go back!</Link>
            </div>
        );
    }

    private todoFromId = () => {
        const {todoList, match} = this.props;
        const todo: ITodo = todoList.todos.filter((t: ITodo) => t.id ===  match.params.id)[0];

        if (!todo) {
            return <p>Todo not found</p>;
        }

        return (
            <>
                <p>{todo.shortDesc}</p>
                <p>{todo.message}</p>
            </>
        );
    }
}

const TodoDetailsConnected = connect((state: AppState) => ({todoList: state.todos}))(TodoDetails);

export {TodoDetails, TodoDetailsConnected};
