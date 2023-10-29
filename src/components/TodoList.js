import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);

    const filterByStatus = (todo) => {
        const { status } = filters;
        switch (status) {
            case 'Complete':
                return todo.completed;
            case 'Incomplete':
                return !todo.completed;
            default:
                return todo;
        }
    };

    const filterByColors = (todo) => {
        const { colors } = filters;
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return todo;
    };

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter(filterByStatus)
                .filter(filterByColors)
                .map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
        </div>
    );
};

export default TodoList;
