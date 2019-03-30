
export interface IRestEntity {
    isLoading: boolean;
    error?: string;
}

export interface ITodoList extends IRestEntity {
    todos: ITodo[];
}

export interface ITodo {
    id: string;
    shortDesc: string;
    message: string;
}
