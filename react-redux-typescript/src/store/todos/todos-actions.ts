import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {AppState} from '../';
import {ITodo} from '../../types';
import {TodoActionTypes} from '../action-keys';

const TODO_API_URL = '/api/todos';

export const todoAddAction = (todo: ITodo) => ({type: TodoActionTypes.TODOS_ADD_ONE, todo});
export const todoAddAllAction = (todos: ITodo[]) => ({type: TodoActionTypes.TODOS_ADD_ALL, todos});
export const todoErrorAction = (error: string) => ({type: TodoActionTypes.TODOS_ERROR, error});
export const todoLoadingAction = () => ({type: TodoActionTypes.TODOS_LOADING});

export const fetchTodos = () => {
    return (dispatch: ThunkDispatch<AppState, void, Action>) => {
        dispatch(todoLoadingAction());
        return fetch(TODO_API_URL)
            .then(
                (response) => response.json(),
                (error) => dispatch(todoErrorAction(error))
            ).then((response) => {
                if ((response || []).length) {
                    return dispatch(todoAddAllAction(response));
                } else {
                    return dispatch(todoErrorAction('No todosReducer found in response'));
                }
            }).catch((error) => dispatch(todoErrorAction(error)));
    };
};

export const getTodoById = (id: string) => {
    return (dispatch: ThunkDispatch<AppState, void, Action>) => {
        dispatch(todoLoadingAction());

        return fetch(`${TODO_API_URL}/${id}`)
            .then(
                (response) => response.json(),
                (error) => dispatch(todoErrorAction(error))
            ).then((response) => {
                if (response.id) {
                    return dispatch(todoAddAction(response));
                } else {
                    return dispatch(todoErrorAction('No todos found in response'));
                }
            });
    };
};
