import {ITodoList} from '../../types';
import {TodoActionTypes} from '../action-keys';

const initialState: ITodoList = {
    todos: [],
    isLoading: false,
    error: null
};

export const todosReducer = (state = initialState, action: any): ITodoList => {
    switch (action.type) {
        case TodoActionTypes.TODOS_ADD_ONE:
            return {
                ...state,
                todos: [...state.todos, {...action.todo}],
                isLoading: false
            };

        case TodoActionTypes.TODOS_ADD_ALL:
            return {
                ...state,
                todos: [...action.todos],
                isLoading: false
            };

        case TodoActionTypes.TODOS_ERROR:
            return {...initialState, error: action.error};

        case TodoActionTypes.TODOS_LOADING:
            return {...state, isLoading: true};

        default:
            return state;
    }
};
