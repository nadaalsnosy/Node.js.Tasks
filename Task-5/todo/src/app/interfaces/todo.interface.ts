export interface TODO {
    _id: string;
    title: string;
    content: string;
    createdBy: {
        id: string;
        name: string;
    };
    createdAt: string
}

export const defaultTodo: TODO = {
    _id: '',
    title: '',
    content: '',
    createdBy: {
        id: '',
        name: ''
    },
    createdAt: ''
}