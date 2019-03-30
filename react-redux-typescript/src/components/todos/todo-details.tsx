import _ from 'lodash-es';
import * as React from 'react';
import {connect} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

import {AppState} from '../../store';
import {getTodoById} from '../../store/todos';
import {ITodo, ITodoList} from '../../types';

interface ITodoDetailsStateProps {
    todoList: ITodoList;
}

interface ITodoDetailsDispatchProps {
    getTodo: (id: string) => any;
}

interface ITodoDetailsState {
    todo: ITodo;
}

type TodoDetailsType = ITodoDetailsStateProps
    & ITodoDetailsDispatchProps
    & RouteComponentProps<{id: string}>;

class TodoDetails extends React.Component<TodoDetailsType, ITodoDetailsState> {

    public state: ITodoDetailsState = {
        todo: null
    };

    public componentDidMount() {
        const {match, todoList} = this.props;

        if (todoList.todos.length) {
            this.setState({todo: this.getTodoFromList(match.params.id)});
        } else {
            this.props.getTodo(this.props.match.params.id).then(() => {
                this.setState({todo: this.getTodoFromList(match.params.id)});
            });
        }
    }

    public render() {
        return (
            <div>
                {this.todoFromId()}
                <Link to="/">Go back!</Link>
            </div>
        );
    }

    private todoFromId = () => {
        const {todo} = this.state;

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

    private getTodoFromList = (id: string): ITodo => {
        const {todoList} = this.props;

        if (todoList.todos.length) {
            return _.find(todoList.todos, (t: ITodo) => t.id === id) as ITodo;
        }

        return null;
    }
}

const mapStateToProps = (state: AppState) => ({todoList: state.todos});
const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, Action>) => ({
    getTodo: (id: string) => dispatch(getTodoById(id))
});

const TodoDetailsConnected = connect(mapStateToProps, mapDispatchToProps)(TodoDetails);

export {TodoDetails, TodoDetailsConnected};
